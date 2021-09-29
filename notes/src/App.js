import './App.css';
import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/note'
import Notification from './components/Notification';
import LoginService from './services/login'
import LoginForm from './components/LoginForm';
import Toggable from './components/Toggable';
import NoteForm from './components/NoteForm';
const App = (props) => {
    const [note, setNote] = useState([])
    const [newNote, setNewNote] = useState('')
    const [newDay, setNewDay] = useState('')
    const [newOur, setNewOur] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await LoginService.login({
                username, password
            })
            localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
            setTimeout(() => {
                localStorage.removeItem('loggedNoteappUser')
                setUser(null)
            }, 1000 * 60 * 60);
            noteService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000);
        }
    }
    useEffect(() => {
        noteService
            .getAll()
            .then(res => {
                //console.log(res.data.sort((a, b) => b.giorno > a.giorno ? -1 : 1))
                setNote(res.data.sort((a, b) => b.giorno > a.giorno ? -1 : 1))
            })
    }, [])

    useEffect(() => {
        const loggedUserJSON = localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])
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
        noteService
            .create(noteObj)
            .then(res => {
                setNote(note.concat(res.data).sort((a, b) => new Date(a.giorno) - new Date(b.giorno)))
                setNewNote('')
                setNewDay('')
                setNewOur('')
            })
    }
    const toggleImportanceOf = id => {
        const nota = note.find(n => n.id === id)
        const changedNote = { ...nota, important: !nota.important }
        noteService.update(id, changedNote).then(res => {
            setNote(note.map(nota => nota.id !== id ? nota : res.data))
        })
            .catch(error => {
                setErrorMessage(
                    `La nota '${nota.tema}' è stata rimossa dalla lista`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)

            })
    }
    const deleteNotaOf = (id, tema) => {
        const r = window.confirm(`Sicuro di voler eliminare la nota ${tema} ? `)
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
        console.log(e.target.value)
        setNewNote(e.target.value)

    }
    const handleDayChange = (date) => {
        setNewDay(date)
    }

    const handleOurChange = (e) => {
        console.log(e.target.value)
        setNewOur(e.target.value)
    }


    const noteToShow = showAll
        ? note
        : note.filter(nota => nota.important)

    const loginForm = () => {
        return (

                <div id="login-page" className="row">
                    <Toggable buttonLabel='Login'>
                        <LoginForm
                            username={username}
                            password={password}
                            handleUsernameChange={({ target }) => setUsername(target.value)}
                            handlePasswordChange={({ target }) => setPassword(target.value)}
                            handleSubmit={handleLogin}
                        />
                    </Toggable>
                </div>
    
        )
    }
    const noteForm = () => (
        <div className="row">
            <Toggable buttonLabel='New Note'>
                <NoteForm
                onSubmit={addNote}
                value={newNote}
                handleChange={handleNoteChange}
                newDay={newDay}
                newOur={newOur}
                handleDayChange={handleDayChange}
                handleOurChange={handleOurChange}
                />
            </Toggable>
        </div>
    )

    const noteList = () => (
        <>
            <button className='waves-effect waves-light btn-small' onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>

            <ul className='collection'>
                {noteToShow.map(nota =>
                    <Note
                        key={nota.id}
                        nota={nota}
                        toggleImportance={() => toggleImportanceOf(nota.id)}
                        deleteNota={() => deleteNotaOf(nota.id, nota.tema)}
                    />
                )}
            </ul>
        </>
    )
    const logout = () => {
        localStorage.removeItem('loggedNoteappUser')
        setUser(null)
    }
    return (
        <div className="container">
            <h1>Note</h1>
            <Notification message={errorMessage} />
            {user === null ?
                loginForm() :
                <div>
                    <p>Ciao {user.name} <button className="waves-effect waves-light btn-small" onClick={logout}>Logout <i className="material-icons">lock_outline</i></button></p>
                    {noteForm()}
                    {noteList()}
                </div>

            }
        </div>
    );
}

export default App;