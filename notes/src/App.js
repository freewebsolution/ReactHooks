import './App.css';
import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/note'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import moment from'moment'
const App = (props) => {
  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState('')
  const [newDay, setNewDay] = useState('')
  const [newOur, setNewOur] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(res => {
        //console.log(res.data.sort((a,b) => b.giorno > a.giorno ? -1 : 1))
        setNote(res.data.sort((a,b) => b.giorno > a.giorno ? -1 : 1))
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
  const deleteNoteOf = (id, tema) => {
    const r = window.confirm(`Sicuro di voler cancellare la nota  ${tema} ?`)
    if (r === false) {
      return
    } else {
      note.filter(n => n.id === id)
      noteService
        .elimina(id)
        .then(() => {
          setNote(note.filter(nota => nota.id !== id))
        })
    }
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)

  }
  const handleDayChange = (date) => {
    setNewDay(date)

  }

  const handleOurChange = (e) => {
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
            deleteNote={() => deleteNoteOf(nota.id, nota.tema)}
          />
        )}
      </ul>
      <div className="row">
        <form onSubmit={addNote} className='col s12'>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">chat</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                name='tema'
                onChange={handleNoteChange}
                value={newNote}
                required
              />
              <label htmlFor="icon_prefix">Aggiungi nota...</label>
            </div>
            <div className="col s3">
              <div style={{marginTop:'16px'}}>
                <i className="material-icons prefix" style={{ marginRight: '5px' }}>date_range</i>
                <DatePicker
                  autoComplete='off'
                  selected={newDay}
                  onChange={handleDayChange}
                  id="icon_prefix"
                  className="validate"
                  dateFormat='dd/MM/yyyy'
                  style={{ marginLeft: '5px' }}
                  minDate={moment().toDate()}
                  required
                  placeholderText='Data...'
                />
              </div>

            </div>
            <div className="col s3">
              <TextField
                onChange={handleOurChange}
                value={newOur}
                required
                id="time"
                label="Ora..."
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </div>
          </div>
          <button className='btn-floating  waves-effect waves-light green' type='submit'><i className="material-icons">add_to_photos</i></button>
        </form>
      </div>
    </div>
  );
}

export default App;
