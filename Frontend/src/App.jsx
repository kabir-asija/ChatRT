import axios from "axios";
import { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const generateAnswer = async () => {
    setAnswer("Loading...");
    try {
      const response = await axios.post("http://localhost:2000/generate", {
        question,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-8 bg-black text-white">
      <h1 className="text-bold font-['Gilroy'] text-3xl mb-12 mt-10">
        Welcome to <span className="text-purple-600">ChatRT</span>
      </h1>
      <textarea
        className="border rounded text-white placeholder-zinc-300 p-2 overflow-auto"
        onChange={(e) => setQuestion(e.target.value)}
        rows="7"
        cols="35"
        placeholder="Ask your question..."
        required
      ></textarea>
      <button
        className=" bg-purple-800 text-white font-semibold px-3 py-2 m-3 cursor-pointer hover:shadow shadow-purple-900 rounded"
        onClick={generateAnswer}
        disabled={!question}
      >
        Generate Answer
      </button>
      <div className="w-[80vw] overflow-hidden p-3 text-center">
        <pre className="whitespace-pre-wrap break-words">{answer}</pre>
      </div>
    </div>
  );
};

export default App;
