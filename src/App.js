import { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';


function App() {
  const [state, setstate] = useState({
    name: "",
    token: ""
  })
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/home" component={Home}></Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
