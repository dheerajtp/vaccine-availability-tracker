import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-3 h3">
          <b>
            <header className="text-primary">
              Vaccine Availability Tracker
            </header>
          </b>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
