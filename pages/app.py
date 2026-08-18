import streamlit as st
from datetime import datetime
def load_css (file_name):
   with open(file_name,"r") as f:
      st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

selected_theme="pages/design.css"

load_css("pages/design.css")
current_time = datetime.now().time()
if (current_time > datetime.strptime("4:00:00","%H:%M:%S").time() and current_time <= datetime.strptime("11:00:00","%H:%M:%S").time()):
   selected_theme= "morning.css"

elif (current_time>datetime.strptime("11:00:01","%H:%M:%S").time() and current_time<=datetime.strptime("16:00:00","%H:%M:%S").time()):
   selected_theme="afternoon.css"


   
load_css(selected_theme)


   
st.markdown(
   '<h1 class="Head">Campus Mind: Student Journaling portal</h1>',unsafe_allow_html=True)
st.markdown ("-----")


st.markdown(f"Opening Time:{current_time}")


st.markdown('<div class="Greeting>',unsafe_allow_html=True)
st.subheader("How are you feeling today! Well write your mind out here")
user_entry = st.text_area("Your Private Jornal",placeholder="Start typing your thoughts here ....",height=200)
st.markdown('</div>',unsafe_allow_html=True)



if st.button("Analyze My Enty"):
    if user_entry.strip()=="":
       st.warning("Please type something before submitting!")
    else:
       st.success("Entry Received!(The AI will analyze your messages Ssshhh! )")
       st.info(f"Your input length:{len(user_entry)}characters.")