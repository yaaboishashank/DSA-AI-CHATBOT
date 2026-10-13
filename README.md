# DSA AI Chatbot

**Your Strict & Sarcastic AI-Powered DSA Mentor**

A command-line AI chatbot built using **JavaScript, Node.js, and Google Gemini API**. It helps students learn Data Structures and Algorithms (DSA) through beginner-friendly explanations, examples, and interactive conversations.

The chatbot behaves like a strict, sarcastic DSA instructor who teaches DSA concepts patiently but gives short, funny scoldings when students ask unrelated questions.

## Features

- **AI-Powered DSA Tutor** — Explains data structures and algorithms in simple language.
- **Strict Teacher Personality** — Uses a custom system prompt to behave like a strict and sarcastic coding instructor.
- **Conversation Memory** — Remembers previous messages during the current session.
- **Interactive Terminal Chat** — Ask questions directly through the command line.
- **JavaScript Examples** — Provides coding examples and explanations in JavaScript.
- **Time & Space Complexity** — Explains algorithm complexity when relevant.
- **Hinglish Support** — Responds naturally to Hindi-English questions.
- **Topic Restriction** — Focuses on DSA and gives short, funny responses to unrelated questions.

## Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Main programming language |
| Node.js | JavaScript runtime |
| Google Gemini API | AI-powered responses |
| Google GenAI SDK | Communicating with Gemini |
| dotenv | Securely loading environment variables |
| readline-sync | Taking user input from the terminal |

## Libraries Used

**1. `@google/genai`**

Official Google GenAI SDK for interacting with Gemini models.

**2. `dotenv`**

Loads the Gemini API key securely from a `.env` file.

**3. `readline-sync`**

Allows users to type questions directly into the terminal.

## Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/DSA-AI-Chatbot.git
cd DSA-AI-Chatbot
```

**2. Install dependencies**

```bash
npm install
```

**3. Create a `.env` file**

```env
GOOGLE_API_KEY=your_gemini_api_key
```

Get your API key from [Google AI Studio](https://aistudio.google.com/apikey).

**4. Run the chatbot**

```bash
node DSA.js
```

## Example Conversation

**User:** What is a linked list?

**DSA Mentor:** A linked list is a linear data structure where each node contains data and a reference to the next node. Let's understand it with a simple JavaScript example.

**User:** What is its time complexity?

**DSA Mentor:** Searching takes O(n) time because you may need to traverse the entire list.

**User:** How are you?

**DSA Mentor:** Meri chinta chhodo, apne DSA ki chinta karo! Padhai karo.

## Project Structure

```text
DSA-AI-Chatbot/
├── DSA.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

The `.env` file and `node_modules` directory are excluded from Git.

## How It Works

1. The user enters a DSA question in the terminal.
2. The chatbot sends the question and previous conversation history to the Gemini API.
3. A custom system instruction guides the AI's teaching style.
4. Gemini generates a response.
5. The response appears in the terminal and is saved in session history.

**Note:** Conversation memory is temporary and resets when the program restarts.

## Future Improvements

- Add a web-based chat interface.
- Add difficulty levels for DSA questions.
- Add coding quizzes and practice problems.
- Save chat history between sessions.
- Add progress tracking.

## Author

Built as part of my **Generative AI Learning Journey — Day 3**.

Learning by building real-world AI projects with JavaScript.
