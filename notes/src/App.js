import './App.css';

const App = ({ note }) => {
  return (
    <div className="App">
      <h1>Note</h1>
      <ul>
        {note.map(nota =>
          <li key={nota.id}>{nota.tema} il giorno {nota.giorno} alle ore {nota.ora}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
