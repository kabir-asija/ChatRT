# ChatRT
ChatRT is a secure, lightweight service generate intelligent answers from user-submitted questions.

🔧 Features
- ⚡ Fast and minimal Express.js setup
- 🔐 Secure .env-based Gemini API key management
- ✅ Input validation and error handling
- 🤖 Gemini 2.5 Flash integration for natural language responses
- 🌐 CORS-enabled for frontend connectivity
- 📦 Ready-to-use /generate POST endpoin

🚀 Getting Started
1. Clone the repo

2. Create a .env file:
API_KEY=your_gemini_api_key_here
 
3. Install dependencies:
npm install

 4.Start the server:
node index.js

 5.Send a POST request to:
http://localhost:2000/generate

- with JSON body:
{ "question": "What is the capital of France?" }
