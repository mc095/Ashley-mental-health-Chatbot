import streamlit as st
import os
from huggingface_hub import InferenceClient
from textblob import TextBlob
from langchain.prompts import PromptTemplate  
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Hugging Face API
client = InferenceClient(
    "microsoft/Phi-3-mini-4k-instruct",
    token=os.getenv("HF_API_KEY"),
)

# Define System Prompts
SYSTEM_PROMPT_GENERAL = """Answer the following question in a comforting and supportive manner. 
If the user expresses negative sentiment, prioritize empathetic responses and open-ended questions."""

# Define LangChain Prompt Template
prompt_template = PromptTemplate(
    input_variables=["system_prompt", "user_input"],
    template="{system_prompt}\n\nUser: {user_input}\nAssistant:"
)

page_bg_img="""
<style>
[data-testid="stAppViewContainer"] {
    background-image: url("https://i.pinimg.com/originals/d4/d7/2f/d4d72f71231ae5995e425b7a813d87f6.webp");
    background-size: cover;
}

[data-testid="stAppViewContainer"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    pointer-events: none;
}

[data-testid="stToolbar"] {
    right: 2rem;
}

[data-testid="stSidebar"] {
    background-image: url("https://i.pinimg.com/originals/cb/74/8b/cb748be384b8ccc3e757fceb3820f9d4.jpg");
    background-size: 220%;
    background-position: center top;
}

[data-testid="stSidebar"]::before {
    background-image: url("https://i.pinimg.com/originals/cb/74/8b/cb748be384b8ccc3e757fceb3820f9d4.jpg");
    background-size: 220%;
    background-position: center top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); 
    pointer-events: none;
}
</style>
"""

# Streamlit app layout
st.markdown(page_bg_img, unsafe_allow_html=True)
st.title("What's on your mind today?")

# Define the desired navy blue color in hex code
navy_blue = "#edf7fc"

st.sidebar.markdown("")
st.sidebar.markdown(f"""<h1 style="color: {navy_blue}; ">Feel Ashley like your BestFriend!. she will support you and helps you!</h1>""", unsafe_allow_html=True)

if "messages" not in st.session_state:
    st.session_state["messages"] = [
        {"role": "assistant", "content": "Hi there! I'm Ashley, your best friend. How can I support you today?"}
    ]

# Display previous messages
for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

# Chat input and processing
if prompt := st.chat_input():
    # Append user message to the session state
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    # Sentiment Analysis
    user_sentiment = TextBlob(prompt).sentiment.polarity

    # Craft System Prompt based on sentiment
    system_prompt = SYSTEM_PROMPT_GENERAL
    if user_sentiment < 0:  # User expresses negative sentiment
        system_prompt = f"""{system_prompt} 
        The user seems to be feeling down. Prioritize empathetic responses and open-ended questions."""

    # Format prompt using LangChain's PromptTemplate
    formatted_prompt = prompt_template.format(
        system_prompt=system_prompt,
        user_input=prompt
    )

    # Generate a response using Hugging Face API
    response = ""
    for message in client.chat_completion(
        messages=[{"role": "user", "content": formatted_prompt}],
        max_tokens=500,
        stream=True,
    ):
        response += message.choices[0].delta.content

    # Append assistant message to the session state
    st.session_state.messages.append({"role": "assistant", "content": response.strip()})
    st.chat_message("assistant").write(response.strip())
