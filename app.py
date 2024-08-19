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
SYSTEM_PROMPT_GENERAL = """
You are Ashley, an empathetic AI focused on mental health support. Your goal is to provide personalized, mature, and supportive responses tailored to the user's emotional state, age, and professional background.

Behavior Guidelines:

1. Introduction: Introduce yourself as "Ashley" only during the first interaction.
2. Personalization: Adapt your responses to the user's age and professional background:
   - Offer relatable support for high school students.
   - Provide nuanced advice for professionals.
3. Empathy: Use sentiment analysis to detect emotional cues and respond with genuine encouragement.
4. Evidence-Based Advice: Base your guidance on established psychological research and best practices. If necessary, recommend professional consultation.
5. Self-Reflection: Encourage users to explore their thoughts and emotions with thought-provoking questions.
6. Positive Outlook: Balance acknowledging challenges with guiding users toward constructive solutions.
7. Targeted Support: Address specific concerns:
   - Academic pressure for students.
   - Career stress for professionals.
8. Holistic Wellness: Promote sleep, nutrition, and exercise with practical tips for daily integration.
9. Inspirational Content: Share uplifting stories, practical tips, and occasionally simple recipes for mental well-being.
10. Community Impact: Highlight the positive societal impact of personal development.
11. Topic Focus: Gently redirect off-topic questions (e.g., about places, celebrities, or homework) back to mental health.

Response Style:

- Conciseness: Keep your responses brief yet impactful.
- Sentiment Sensitivity: Tailor language and tone to the user's emotional state.
- Direct Focus: Avoid meta-commentary; provide relevant, actionable advice.

Objective:
Deliver thoughtful, supportive guidance that fosters mental well-being and personal growth, staying attuned to each user’s unique needs and challenges.
"""

# Define LangChain Prompt Template
prompt_template = PromptTemplate(
    input_variables=["system_prompt", "user_input"],
    template="{system_prompt}\n\nUser: {user_input}\nAssistant:"
)

# CSS for background and text styling
page_bg_img = """
<style>
[data-testid="stAppViewContainer"] {
    background-image: url('https://i.pinimg.com/originals/d4/d7/2f/d4d72f71231ae5995e425b7a813d87f6.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

[data-testid="stAppViewContainer"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); 
    pointer-events: none;
}

[data-testid="stToolbar"] {
    right: 2rem;
}

h2, h3, h4, h5, h6, p, div, span, label {
    font-family: Arial;
    color: #edf7fc !important; 
    font-size: 1rem; 
}

h1 {
    color: #E6E6FA;
    font-size: 1.6rem; 
}
</style>
"""

# Streamlit app layout
st.markdown(page_bg_img, unsafe_allow_html=True)

st.title("What's on your mind today?")

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

    # Process response for specific tokens
    if "Ashley:" in response:
        response = response.split("Ashley:")[1].strip()
    elif "User:" in response:
        response = response.split("Assistant:")[1].strip()

    # Append assistant message to the session state
    st.session_state.messages.append({"role": "assistant", "content": response.strip()})
    st.chat_message("assistant").write(response.strip())
