import os
import datetime
import json
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient
import bcrypt
import jwt
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

# Read secret configuration keys safely
JWT_SECRET = os.getenv("JWT_SECRET", "your-default-safe-fallback-secret")

app = FastAPI(title="Campus Mind AI Backend")

# CORS Setup - Allows your Next.js frontend to communicate securely
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
    "https://campus-mind-analyzer-23of54owe-aritrik-roy.vercel.app/"],
    allow_origin_regex=r"https://campus-mind-analyzer-.*\.vercel\.app", 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Database & AI Engines (MongoDB disabled for testing)
class FakeDb:
    users = None
db = FakeDb()

# Setup Gemini AI Client (Gemini 2.5)
ai = genai.Client(api_key=os.getenv("GEMINI_API_KEY", ""))

# --- SCHEMA DATA VALIDATION MODELS ---
class UserRegister(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    password: str = Field(..., min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class JournalInput(BaseModel):
    journalText: str

# --- STRUCTURAL AI RESPONSE SCHEMAS (Ensures error-free JSON parsing) ---
class RemedyItem(BaseModel):
    title: str = Field(..., description="The name of the coping strategy or exercise")
    type: str = Field(..., description="The type of exercise, e.g., Grounding, Breathing, CBT")
    steps: list[str] = Field(..., description="Sequential bullet points or instructions for the user")

class AIAnalysisResult(BaseModel):
    empathy_statement: str = Field(..., description="An empathetic, validation statement responding to the journal entry")
    remedies: list[RemedyItem] = Field(..., description="List of coping methods recommended for the user")


# --- AUTH UTILITY TOOLS ---
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

def create_jwt_token(user_id: str) -> str:
    payload = {
        "sub": user_id,
        "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=7)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm="HS256")

async def get_current_user_id(token: str = Depends(lambda r: r.headers.get("Authorization"))):
    if not token or not token.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid session token")
    clean_token = token.split(" ")[1]
    try:
        payload = jwt.decode(clean_token, JWT_SECRET, algorithms=["HS256"])
        return payload["sub"]
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Session expired or invalid")

# --- CORE API ROUTES ---

@app.post("/api/auth/register")
async def register(user_data: UserRegister):
    raise HTTPException(status_code=501, detail="Database disabled for offline local testing.")

@app.post("/api/auth/login")
async def login(user_data: UserLogin):
    raise HTTPException(status_code=501, detail="Database disabled for offline local testing.")


@app.post("/api/journal/analyze-and-save")
async def analyze_and_save(payload: JournalInput):
    if len(payload.journalText.strip()) < 10:
        raise HTTPException(status_code=400, detail="Journal entry is too short.")
    
    try:
        system_prompt = (
            "You are an empathetic campus mental health AI. Read the journal entry and return a structured analysis. "
            "Validate the student's emotions supportively, and provide actionable coping steps."
        )

        # Enforce strict output using response_schema constraint
        response = ai.models.generate_content(
            model='gemini-3.6-flash',
            contents=f"Analyze this student text: '{payload.journalText}'",
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                response_mime_type="application/json",
                response_schema=AIAnalysisResult
            )
        )
        
        # Safely parse since Gemini mathematically guarantees structural output
        ai_data = json.loads(response.text)
        
        return {"analysis": ai_data, "message": "Pipeline active!"}
        
    except Exception as e:
        print("CRITICAL BACKEND ERROR:", str(e))
        raise HTTPException(status_code=500, detail=f"AI Engine Error: {str(e)}")
