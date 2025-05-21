import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Write your note..."
      ></textarea>
      <button type="submit" className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Add Note
      </button>
    </form>
  );
}
