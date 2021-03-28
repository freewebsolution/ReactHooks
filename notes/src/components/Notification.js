import React from 'react';
import './css/notification.css'
const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'red',
        backgroundColor: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
    if (message === null) {
        return null
    }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    );
};

export default Notification;