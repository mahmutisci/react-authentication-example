import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {PrivateRoute} from "./components/PrivateRoute";
import {LoginPage} from "./pages/HomePage";
import {HomePage} from "./pages/LoginPage";
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
