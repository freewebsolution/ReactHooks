import './App.css';
import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/note'
const App = (props) => {
  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState('')
  const [newDay, setNewDay] = useState('')
  const [newOur, setNewOur] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(res => {
        setNote(res.data)
      })
  }, [])
  const addNote = (e) => {
    e.preventDefault()
    const noteObj = {
      tema: newNote,
      giorno: newDay,
      ora: newOur,
      data: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    noteService
      .create(noteObj)
      .then(res => {
        setNote(note.concat(res.data))
        setNewNote('')
        setNewDay('')
        setNewOur('')
      })
  }
  const toggleImportanceOf = id => {
    const nota = note.find(n => n.id === id)
    const changedNote = { ...nota, important: !nota.important }
    noteService
    .update(id, changedNote).then(res => {
      setNote(note.map(nota => nota.id !== id ? nota : res.data))
    })
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
    <div className="container">
      <h1>Note</h1>
      <button className='waves-effect waves-light btn-small' onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul className='collection'>
        {noteToShow.map(nota =>
          <Note
            key={nota.id}
            nota={nota}
            toggleImportance={() => toggleImportanceOf(nota.id)}
          />
        )}
      </ul>
      <div class="row">
        <form onSubmit={addNote} className='col s12'>
          <div class="row">
            <div class="input-field col s4">
              <i class="material-icons prefix">chat</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                name='tema'
                onChange={handleNoteChange}
                value={newNote}
                required
              />
              <label for="icon_prefix">Aggiungi nota...</label>
            </div>
            <div class="input-field col s4">
              <i class="material-icons prefix">date_range</i>
              <input
                id="icon_prefix"
                type="text"
                class="validate"
                onChange={handleDayChange}
                value={newDay}
                required
              />
              <label for="icon_telephone">Data...</label>
            </div>
            <div class="input-field col s4">
              <i class="material-icons prefix">access_time</i>
              <input
                id="icon_prefix"
                type="text"
                class="validate"
                onChange={handleOurChange}
                value={newOur}
                required
              />
              <label for="icon_telephone">Ora...</label>
            </div>
          </div>
          <button className='btn-floating  waves-effect waves-light green' type='submit'><i className="material-icons">add_to_photos</i></button>
        </form>
      </div>
    </div>
  );
}

export default App;
