import { useState } from "react";
import { Header } from "./components/header";
import { Search } from "./components/search";
import Markdown from "react-markdown";

export function App() {
  const [answers, setAnswers] = useState("");
  const [loading, setLoading] = useState(false);

  function clearAnswers() {
    setAnswers("");
  }

  return (
      <div className="max-w-3xl mx-auto px-10 pb-20">
      <Header onClearAnswers={clearAnswers} />

        <h1 className="text-4xl text-gray-500 tracking-wider font-bold mt-16">
          <span className="text-violet-500 font-medium block">Olá,</span>
          Posso ajudar?
        </h1>

        <Search
          setAnswers={setAnswers}
          setLoading={setLoading}
        />

        {loading ? (
          <p className="leading-relaxed  text-gray-300 mt-10">
            Carregando resposta...
          </p>
        ) : (
          <Markdown className="leading-loose text-base text-gray-200 mt-10">
            {answers}
          </Markdown>
        )}
      </div>
  );
}
