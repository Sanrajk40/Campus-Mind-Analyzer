import streamlit as st
st.title(" Campus Mind: Student Journaling Portal")
st.markdown ("-----")
st.subheader("How are you feeling today! Well write your mind out here")
user_entry = st.text_area("Your Private Jornal",placeholder="Start typing your thoughts here ....",height=200)
if st.button("Analyze My Enty"):
    if user_entry.strip()=="":
       st.warning("Please type something before submitting!")
    else:
       st.success("Entry Received!(The AI will analyze your messages Ssshhh! )")
       st.info(f"Your input length:{len(user_entry)}characters.")