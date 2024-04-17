import { Trash2 } from "lucide-react";
import logo from "../assets/logo.svg";

export function Header({ onClearAnswers }) {
  function handleClearAnswers() {
    onClearAnswers();
  }
  return (
    <header className="flex justify-between items-center py-6">
      <img className="size-10" src={logo} alt="Imagem de logo da página" />

      <button
        onClick={handleClearAnswers}
        className="bg-violet-500 hover:bg-violet-700 text-white px-4 py-2 rounded-md flex gap-2 items-center"
      >
        Limpar
      </button>
    </header>
  );
}
