import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';



function App() {
    return (
    <div className="App">
    <Router>
        <Switch>
        <Route exact path="/" component={HomePage}></Route>
            <Route path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        </Switch>
    </Router>

    </div>
     
    );
  }
  
  export default App;