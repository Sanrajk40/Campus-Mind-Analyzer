import streamlit as st
import streamlit.components.v1 as components

# 1. Streamlit Page Configuration
st.set_page_config(
    page_title="Campus Mind | Journaling Portal",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed",
)


# 2. Aurora Background Function
def add_aurora_background():
    st.markdown(
        """
        <style>
        .stApp {
            background-color: #030712 !important;
            overflow: hidden;
        }

        .stApp::before {
            content: "";
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.35), transparent 60%),
                        radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3), transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.25), transparent 50%);
            filter: blur(80px);
            animation: aurora 12s infinite alternate ease-in-out;
            z-index: 0;
            pointer-events: none;
        }

        @keyframes aurora {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
        }

        .stAppViewContainer > .main {
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 16px;
            padding: 2rem;
            z-index: 1;
        }

        h1, h2, h3, p, label, .stMarkdown {
            color: #FFFFFF !important;
            text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
        }

      /* Hide Sidebar Navigation completely */
        [data-testid="stSidebar"], [data-testid="collapsedControl"] {
            display: none !important;
        }

        /* Ensure typed input text is crisp and dark */
        div[data-baseweb="input"] input {
            color: #0f172a !important;
            font-weight: 500 !important;
        }

        div[data-baseweb="select"] span {
            color: #0f172a !important;
            font-weight: 500 !important;
        }

        /* React Bits Inspired Border Glow Button */
        .stButton > button {
            position: relative !important;
            background: #120F17 !important;
            color: #FFFFFF !important;
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
            border-radius: 12px !important;
            padding: 0.75rem 2rem !important;
            font-weight: 600 !important;
            width: 100% !important;
            z-index: 1 !important;
            overflow: hidden !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 0 15px rgba(192, 132, 252, 0.2) !important;
        }

        /* Glowing Border Sweep Animation */
        .stButton > button::before {
            content: '' !important;
            position: absolute !important;
            top: -50% !important;
            left: -50% !important;
            width: 200% !important;
            height: 200% !important;
            background: conic-gradient(
                from 0deg,
                transparent 0deg,
                #c084fc 60deg,
                #f472b6 120deg,
                transparent 180deg
            ) !important;
            animation: borderGlowRotate 4s linear infinite !important;
            z-index: -2 !important;
        }

        /* Inner Background Mask to Keep Border Sharp */
        .stButton > button::after {
            content: '' !important;
            position: absolute !important;
            inset: 2px !important;
            background: #120F17 !important;
            border-radius: 10px !important;
            z-index: -1 !important;
        }

        /* Hover Effect */
        .stButton > button:hover {
            border-color: transparent !important;
            box-shadow: 0 0 25px rgba(192, 132, 252, 0.6), 0 0 10px rgba(244, 114, 182, 0.4) !important;
            transform: translateY(-1px) !important;
        }

        @keyframes borderGlowRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        </style>
        """,
        unsafe_allow_html=True,
    )


# Apply background
add_aurora_background()

# 3. Layout Grid
col1, col2, col3 = st.columns([0.05, 0.9, 0.05])

with col2:
    # Animated Particle Header with Larger Font
    components.html(
        """
        <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 200px; background: transparent;">
            <canvas id="particleCanvas"></canvas>
        </div>

        <script>
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 700;
        canvas.height = 180;

       const text = "Campus Mind";
        const particles = [];

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 72px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let y = 0; y < canvas.height; y += 3) {
            for (let x = 0; x < canvas.width; x += 3) {
                const index = (y * canvas.width + x) * 4;
                if (imageData.data[index + 3] > 128) {
                    particles.push({
                        baseX: x,
                        baseY: y,
                        x: x + (Math.random() - 0.5) * 150,
                        y: y + (Math.random() - 0.5) * 150,
                        size: 2.6,
                        color: Math.random() > 0.5 ? "#4ade80" : "#2dd4bf"
                    });
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += (p.baseX - p.x) * 0.08;
                p.y += (p.baseY - p.y) * 0.08;

                ctx.fillStyle = p.color;
                ctx.shadowColor = "#4ade80";
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }

        animate();
        </script>
        """,
        height=220,
    )

    # Scaled Subtitle
    st.markdown(
        '<p style="font-size: 1.1rem; font-weight: 600; letter-spacing: 1px; color: #94A3B8; margin-top: -10px;">DIGITAL STUDENT JOURNALING PORTAL</p>',
        unsafe_allow_html=True,
    )
    st.write("Welcome back! Please enter your details below.")
    st.divider()

    Name = st.text_input("Full Name", placeholder="e.g. Alex Morgan")
    mailadd = st.text_input(
        "Email Address", placeholder="student@university.edu"
    )

    col_a, col_b = st.columns(2)
    with col_a:
        year = st.slider("Academic Year", 1, 4, 2)
    with col_b:
        gender = st.selectbox(
            "Gender", ["Male", "Female", "Non-binary", "Prefer not to say"]
        )

    st.write("")
    key = st.button("Continue to Portal ->")

    if key:
        if Name and mailadd:
            st.switch_page("pages/home.py")
        else:
            st.warning("Please fill in your name and email to proceed.")
            
           