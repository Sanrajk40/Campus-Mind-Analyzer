import streamlit as st
from datetime import datetime
def load_css (design_css):
   with open(design_css,"r") as f:
      st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

load_css("design.css")

st.title(" Campus Mind: Student Journaling Portal")
st.markdown ("-----")

current_time = datetime.now().strftime("%H:%M:%S")
st.markdown(f"Opening Time:{current_time}")

st.markdown('<div class="Greeting">',unsafe_allow_html=True)
st.subheader("How are you feeling today! Well write your mind out here")
user_entry = st.text_area("Your Private Jornal",placeholder="Start typing your thoughts here ....",height=200)
st.markdown('</div>',unsafe_allow_html=True)



if st.button("Analyze My Enty"):
    if user_entry.strip()=="":
       st.warning("Please type something before submitting!")
    else:
       st.success("Entry Received!(The AI will analyze your messages Ssshhh! )")
       st.info(f"Your input length:{len(user_entry)}characters.")