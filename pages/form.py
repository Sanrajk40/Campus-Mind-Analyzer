import streamlit as st


st.title("Welcome to forms")
col1,col2,col3=st.columns(3)
with col1:
    st.subheader("Stress Audit Review")
    with st.expander("Let's divide your Stress!"):
        st.write("How overwhelmed do you feel by your current course load?")
        st.write("1.Not at all  2.Manageable 3.Highly Stressed 4.Severe Burnout")
        st.slider("Stress level",1,4,2)

        
with col2:
    st.subheader("The Nightly Restorative")
    with st.expander("Let's check your sleep quality"):
        st.write('Do you use digital screens within 30 minutes of sleeping?')
        st.write("1.Always  2.Often 3.Rarely 4.Never")
        st.slider("Stress level",1,4,3)