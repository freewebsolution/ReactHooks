import React, { useState, useEffect } from 'react'
import UserTable from "./tables/UserTable";
import userService from './services/userService'
import AddUserForm from './components/AddUserForm';

const App = (props) => {
  const [users, setUsers] = useState([])
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
    if(r === false) {
      return
    }else {
      users.filter(u => u.id === id)
      userService
      .elimina(id)
      .then(()=> {
        setUsers(users.filter(user => user.id !== id))
      })
    }
  }
  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="col-md-6">
          <h2>View User</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
