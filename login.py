import streamlit as st
import base64

def local_css(file_name):
    with open(file_name) as f:
        st.html(f"<style>{f.read()}</style>")

def addbg(image_file):
    with open(image_file,"rb") as r:
        encoded_string= base64.b64encode(r.read()).decode()
    st.markdown(
    f"""
<style>
.stApp {{
 background-image: url("data:image/jpg;base64,{encoded_string}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}}
</style>
""",
unsafe_allow_html=True
)

addbg("logi.jpg")


local_css("log.css")

st.markdown('<div class="Whole">',unsafe_allow_html=True)
st.title("Campus Mind: Student Journaling portal")
st.subheader("Login Page")
st.write("Let's Get Familiar")
Name = st.text_input("Please Enter your name!")
year = st.slider("Which Year",1,4,1)
gender=st.selectbox("you know this helps!",["Male","Female"])
if year==1:
    st.write(f"So {Name}! You are a newbie! Welcome")


mailadd=st.text_input("Please enter your email id")

st.write(f"So {Name} We are al set lets continue")
key= st.button("Next ->")
st.markdown('</div>',unsafe_allow_html=True)
if key:
    st.switch_page("pages/app.py")

