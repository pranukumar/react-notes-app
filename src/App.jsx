import { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <NoteForm onAdd={addNote} />
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </div>
  );
}

export default App;
