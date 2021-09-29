import React from 'react';

const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="row">
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_box</i>
                        <input
                            className="validate"
                            id="user"
                            type="text"
                            name='Username'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <label htmlFor="user" data-error="wrong" data-success="right">User</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">lock_outline</i>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            name='Password'
                            onChange={handlePasswordChange }
                            
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button type="submit" className="btn waves-effect waves-light col s12">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;