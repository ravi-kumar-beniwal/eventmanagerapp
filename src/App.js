import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from "history";

//import Header from './component/header'
import { Switch, Router, Route } from 'react-router-dom'
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx'
import Event from './component/Event.jsx'
import EventPage from './component/EventPage.jsx'
import Login  from './component/Login.jsx';
//import { Scene, Stack, Actions, ActionConst } from "react-native-router-flux";
import Clock from './component/Clock';
import TodoApp from './component/Todo';
import WrappedNormalLoginForm from './component/WrappedNormalLoginForm.jsx'
import WrappedRegistrationForm from './component/WrappedRegistrationForm.jsx'
import CreateEvent from './component/CreateEvent.jsx';
const hist = createBrowserHistory()
//>
           
//<Header name="henry" age={10} />
class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router history={hist}>
          
          <Switch>
            <Route exact path='/' component={Home} key={0} />
            <Route path='/About' component={About} key={1} />
            <Route path='/Contact' component={Contact} key={2} />
            <Route path='/Event' component={Event} key={3} />>
            <Route path='/EventPage/:date' component={EventPage} key={4} />>
            <Route path='/WrappedNormalLoginForm' component={WrappedNormalLoginForm} key={4} />
            <Route path='/WrappedRegistrationForm' component={WrappedRegistrationForm} key={5}/>
            <Route path='/CreateEvent/:date' component={CreateEvent} key={5}/>
            
          </Switch>
        </Router>
     
      </div>

    );
  }
}

export default App;

