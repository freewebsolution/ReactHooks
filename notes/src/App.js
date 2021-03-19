import './App.css';
import React, { useState } from 'react';
import Note from './components/Note';

const App = (props) => {
  const [note, setNote] = useState(props.note)
  const [newNote, setNewNote] = useState('')
  const addNote = (e) => {
    e.preventDefault()
    const noteObj = {
      tema: newNote,
      data: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: note.lenght + 1
    }
    setNote(note.concat(noteObj))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }
  return (
    <div className="App">
      <h1>Note</h1>
      <ul>
        {note.map(nota =>
          <Note key={nota.id} nota={nota} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          placeholder="Aggiungi nota..."
          onChange={handleNoteChange}
          value={newNote}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
