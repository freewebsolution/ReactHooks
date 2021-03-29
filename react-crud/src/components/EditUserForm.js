import React, { useState,useEffect } from 'react';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    const handleInputChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                props.updateUser(user.id,user)
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
            <button type="submit" className="btn btn-primary">Update User</button>
            <button onClick={() => props.setEditing(false)} className="btn btn-warning"> cacel</button>
        </form>
    );
};

export default EditUserForm;