import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link,Redirect} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Cars from './Cars';
import Contact from './Contact';
import Register from './Register';
import PageNotFound from './PageNotFound';
import './Nav.css';
import 'tachyons';


function App() {
  return (
      <Router>
        <div className = 'App'>
          <Nav/>
          <Switch>
            <Route exact path ='/'  component ={Home}/>
            <Route exact path ='/cars' component ={Cars} />
            <Route exact path ='/contact' component ={Contact} />
            <Route exact  path ='/register' component = {Register} />
            <Route exact path = '/pageNotFound' component ={PageNotFound} />
            <Redirect to ='/PageNotFound' />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
