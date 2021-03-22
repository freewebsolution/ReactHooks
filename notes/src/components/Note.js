import React from 'react';

const Note = ({ nota, toggleImportance, deleteNote }) => {
    //const label = nota.important ? 'Definisci  non importante' : 'Definisci importante'
    return (
        <li className='collection-item' style={{ borderBottom: '1px solid #dadada' }}>
            <span className='title'>{nota.tema} il giorno {nota.giorno} alle ore {nota.ora}</span>
            <span className="secondary-content">
                <button className='waves-effect waves-light btn-small ' onClick={toggleImportance}>{nota.important ? 'not important' : <i className="material-icons">grade</i>}</button>
                <button onClick={deleteNote} style={{ marginLeft: '5px' }} className='btn-floating btn-small waves-effect waves-light red'> <i className="material-icons">delete</i></button>
            </span>

        </li>
    );
};

export default Note;