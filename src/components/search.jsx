import { SearchIcon } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_GOOGLE_KEY);

export function Search({ setAnswers, setLoading }) {
  const [prompt, setPrompt] = useState("");

  async function handleSearchAI(event) {
    event.preventDefault();
    
    setLoading(true);
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    await model
      .generateContent(prompt)
      .then((result) => {
        const response = result.response;
        const text = response.text();
        setAnswers(text);
        setLoading(false);
        setPrompt("");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div className="mt-8">
      <form className="flex items-center gap-3">
        <input
          className="flex-1 bg-transparent border border-gray-400/20 outline-none px-6 py-4 rounded-md text-sm placeholder:text-gray-400"
          type="text"
          placeholder="Digite uma pergunta"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <button
          disabled={prompt === ""}
          onClick={handleSearchAI}
          className="disabled:cursor-not-allowed disabled:opacity-70 bg-violet-500 hover:bg-violet-700 px-5 py-4 rounded-md flex items-center gap-3"
        >
          <SearchIcon size={20} />
        </button>
      </form>
    </div>
  );
}
