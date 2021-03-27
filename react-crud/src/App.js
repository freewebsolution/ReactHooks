import UserTable from "./tables/UserTable";

const App = () => {
  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Add User</h2>
        </div>
        <div className="col-md-6">
          <h2>View User</h2>
          <UserTable/>
        </div>
      </div>
    </div>
  );
}

export default App;
