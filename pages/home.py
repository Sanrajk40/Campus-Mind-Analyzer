import streamlit as st
from datetime import datetime
st.markdown("""
<style>
/* Force Dark Background on Textarea and Select Inputs */
.stTextArea textarea, 
div[data-baseweb="select"] > div,
div[data-baseweb="input"] > div {
    background-color: rgba(15, 23, 42, 0.85) !important;
    color: #ffffff !important;
    border: 1px solid rgba(74, 222, 128, 0.4) !important;
    border-radius: 10px !important;
}

/* Fix Input Text Color */
.stTextArea textarea {
    color: #ffffff !important;
}

/* Hide Sidebar Navigation completely */
[data-testid="stSidebar"], [data-testid="collapsedControl"] {
    display: none !important;
}
</style>
""", unsafe_allow_html=True)
def load_css (file_name):
   with open(file_name,"r") as f:
      st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

selected_theme="pages/design.css"


current_time = datetime.now().time()
if (current_time > datetime.strptime("4:00:00","%H:%M:%S").time() and current_time <= datetime.strptime("11:00:00","%H:%M:%S").time()):
   selected_theme= "morning.css"

elif (current_time>datetime.strptime("11:00:01","%H:%M:%S").time() and current_time<=datetime.strptime("16:00:00","%H:%M:%S").time()):
   selected_theme="afternoon.css"

elif (current_time>datetime.strptime("16:00:01","%H:%M:%S").time() and current_time<=datetime.strptime("19:00:00","%H:%M:%S").time()):
   selected_theme="evening.css"

else :
   selected_theme="night.css"

   
load_css(selected_theme)


   
st.markdown(
   '<h1 class="Head">Campus Mind: Student Journaling portal</h1>',unsafe_allow_html=True)
st.markdown ("-----")


# st.markdown(f"Opening Time:{current_time}")


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

choice=st.selectbox("Would you Like you move to Forms",["","Yes","No"])

if(choice == "Yes"):
   yes=st.button("Proceed")
   if yes:
      st.switch_page("pages/form.py")