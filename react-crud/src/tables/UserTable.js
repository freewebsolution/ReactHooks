import React from 'react';

const UserTable = ({ users }) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.length  ? (
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-success btn-sm mr-2">Edit</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </td>
                    </tr>
                ))

            ):(
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }

        </tbody>
    </table>
)

export default UserTable;