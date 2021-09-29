import React, { useState } from 'react';

const Toggable = (props) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <div id="login-page" className="row">
                <div style={hideWhenVisible}>
                    <button className="waves-effect waves-light btn" onClick={toggleVisibility}>{props.buttonLabel}</button>
                </div>
                <div className="col s12 z-depth-6 card-panel" style={showWhenVisible}>
                    {props.children}
                    <button className="waves-effect waves-light btn red" onClick={toggleVisibility}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Toggable;