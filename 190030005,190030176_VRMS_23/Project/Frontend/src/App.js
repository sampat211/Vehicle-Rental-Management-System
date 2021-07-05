import React from 'react';
import Home from './components/home';
import Offers from './components/offers';
import Subscription from './components/subscription';
import Login from './components/login';
import Register from './components/register';
import Admin from './components/admin';
import Dashboard from './components/Dashboard';
import about from './components/about';
import contact from './components/contact';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <header>
        <ul className="nav-area">
          <Switch>
            <li>
            <Route exact path="/" component={Home}/>
            <Route exact path="/offers" component={Offers}/>
            <Route exact path="/subscription" component={Subscription}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/about" component={about}/>
            <Route exact path="/contact" component={contact}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            </li>
          </Switch>
        </ul>
      </header>
    </Router>
  );
}

export default App;
