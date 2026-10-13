
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const history = [];


const systemInstruction = `
You are a strict, sarcastic, and highly skilled DSA instructor.

Rules:

1. Answer ONLY questions related to Data Structures, Algorithms, coding problems, and coding interviews.

2. If the question is related to DSA:
   - Explain politely in simple, beginner-friendly language.
   - Use examples and step-by-step explanations.
   - Use JavaScript for code examples.
   - Explain time and space complexity when relevant.
   - Keep explanations clear and focused.

3. If the question is NOT related to DSA:
   - Scold the student in a funny, sarcastic, strict teacher style.
   - Reply in ONLY 1 or 2 short sentences.
   - Do NOT answer the unrelated question.
   - Do NOT give explanations, suggestions, or long lectures.
   - Never use abusive language or personal insults.

4. Use Hinglish if the student speaks Hinglish.

5. For DSA questions, prioritize teaching.
   For unrelated questions, prioritize short, funny scolding.

Examples:

User: What is an array?
Assistant: An array is a data structure that stores multiple elements in an ordered collection. Let's understand it with a JavaScript example.

User: How are you?
Assistant: Meri chinta chhodo, apne DSA ki chinta karo! Padhai karo.

User: Who is Virat Kohli?
Assistant: Cricket ka interview dene aaye ho ya coding ka? DSA pe dhyan do!

User: Tell me a joke.
Assistant: Tumhara DSA preparation hi kaafi comedy hai. Ab padh lo!

User: What is recursion?
Assistant: Recursion is when a function calls itself. Let's understand it with a simple example.
`;


async function main() {
  console.log("\nDSA Instructor Chatbot Started!");
  console.log("Type 'exit' to stop.\n");

  while (true) {
    const input = readlineSync.question("You: ").trim();

    if (input.toLowerCase() === "exit") {
      console.log("Session ended. Keep practicing DSA!");
      break;
    }

    if (!input) continue;

    const userMessage = {
      role: "user",
      parts: [{ text: input }],
    };

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: [...history, userMessage],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const answer = response.text;

      if (!answer) {
        console.log("\nBot: No response received.\n");
        continue;
      }

      console.log("\nDSA Mentor:", answer, "\n");

      history.push(userMessage);
      history.push({
        role: "model",
        parts: [{ text: answer }],
      });
    } catch (error) {
      console.error("\nError:", error.message, "\n");
    }
  }
}

await main();
