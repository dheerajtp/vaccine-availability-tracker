import "./App.css";
import React, {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav";
import Form from "./components/Form";
import DistrictForm from "./components/District/DistrictForm";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Form}></Route>
          <Route
            path="/search-by-district"
            exact
            component={DistrictForm}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
