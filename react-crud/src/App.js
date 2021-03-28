import React, { useState, useEffect } from 'react'
import UserTable from "./tables/UserTable";
import userService from './services/userService'
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

const App = (props) => {
  const [users, setUsers] = useState([])
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  useEffect(() => {
    userService
      .getAll()
      .then(res => {
        setUsers(res.data)
      })
  }, [])

  const addUser = (user) => {
    userService
      .addUser(user)
      .then(res => {
        setUsers(users.concat(res.data))
      })
  }

  const deleteUser = (id, name) => {
    const r = window.confirm(`Sicuro di voler eliminare l'utente ${name} `)
    if (r === false) {
      return
    } else {
      users.filter(u => u.id === id)
      userService
        .elimina(id)
        .then(() => {
          setUsers(users.filter(user => user.id !== id))
        })
        
    }
    setEditing(false)
  }
  const editRow = user => {
    setEditing(true)
    console.log(user.name)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    userService
      .updateUser(id, updateUser)
    .then(()=>{
      setUsers(users.map((user) => (user.id === id ? updateUser : user)))
    })
    
  }
  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2>View User</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>

    </div>
  );
}

export default App;
