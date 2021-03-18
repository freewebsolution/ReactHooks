import './App.css';
import Note from './components/Note';

const App = ({ note }) => {
  return (
    <div className="App">
      <h1>Note</h1>
      <ul>
        {note.map(nota =>
          <Note key={nota.id} nota={nota}/>
        )}
      </ul>
    </div>
  );
}

export default App;
