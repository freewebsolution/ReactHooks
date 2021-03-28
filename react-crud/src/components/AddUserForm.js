import React from 'react';

const AddUserForm = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddUserForm;