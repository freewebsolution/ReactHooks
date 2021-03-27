import React from 'react';

const UserTable = () => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Username</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-success btn-sm mr-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>
)

export default UserTable;