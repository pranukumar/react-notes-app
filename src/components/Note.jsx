export default function Note({ note, onDelete }) {
  return (
    <div className="p-4 bg-yellow-100 rounded shadow mb-2">
      <p>{note.text}</p>
      <button
        onClick={() => onDelete(note.id)}
        className="mt-2 text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
