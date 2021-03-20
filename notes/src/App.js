import './App.css';
import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import axios from 'axios';

const App = (props) => {
  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState('')
  const [newDay, setNewDay] = useState('')
  const [newOur, setNewOur] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(()=> {
    console.log('effect')
    axios
      .get('http://localhost:3001/note')
      .then(res => {
        console.log('promise fullfiled')
        setNote(res.data)
      })
  },[])
  console.log('render', note.length, 'note')
  const addNote = (e) => {
    e.preventDefault()
    const noteObj = {
      tema: newNote,
      giorno: newDay,
      ora: newOur,
      data: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: note.lenght + 1
    }
    setNote(note.concat(noteObj))
    setNewNote('')
    setNewDay('')
    setNewOur('')
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)

  }
  const handleDayChange = (e) => {
    console.log(e.target.value)
    setNewDay(e.target.value)
  }

  const handleOurChange = (e) => {
    console.log(e.target.value)
    setNewOur(e.target.value)
  }

  const noteToShow = showAll
    ? note
    : note.filter(nota => nota.important)
  return (
    <div className="App">
      <h1>Note</h1>
      <button onClick={() => setShowAll(!showAll)}>
          show{showAll ? 'Important':'All'}
      </button>
      <ul>
        {noteToShow.map(nota =>
          <Note key={nota.id} nota={nota} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          placeholder="Aggiungi nota..."
          onChange={handleNoteChange}
          value={newNote}
        />
        <input
          placeholder="Aggiungi data..."
          onChange={handleDayChange}
          value={newDay}
        />
        <input
          placeholder="Aggiungi orario..."
          onChange={handleOurChange}
          value={newOur}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
