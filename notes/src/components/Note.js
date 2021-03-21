import React from 'react';

const Note = ({ nota, toggleImportance }) => {
    const label = nota.important ? 'Definisci  non importante' : 'Definisci importante'
    return (
        <div>
            <li>
                {nota.tema} il giorno {nota.giorno} alle ore {nota.ora}
                <button onClick={toggleImportance}> {label}</button>
            </li>
        </div>
    );
};

export default Note;