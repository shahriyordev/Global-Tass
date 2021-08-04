import React from 'react';

//Routing Pages
import Dashboard from './Dashboard';
import Login from './Login';

//Router Modules Router for routing, Switch for switching components related to routes, Link for routes linking
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  
render() {
  return (
    <Router>
      
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
        </Switch>
      
  </Router>
  );
  
}

}
export default App;