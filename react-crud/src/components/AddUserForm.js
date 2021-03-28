import React, { useState } from 'react';

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (!user.name || !user.username) return
                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <div className="form-group">
                <input
                    type="email"
                    required
                    value={user.username}
                    className="form-control"
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Enter email" />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    required
                    value={user.name}
                    className="form-control"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Name" />
            </div>
            <button type="submit" className="btn btn-primary">Add new User</button>
        </form>
    );
};

export default AddUserForm;