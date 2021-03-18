import React from 'react';

const Note = ({nota}) => {
    return (
        <div>
            <li>{nota.tema} il giorno {nota.giorno} alle ore {nota.ora}</li>
        </div>
    );
};

export default Note;