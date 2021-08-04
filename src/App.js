
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header"
import Dashboards from "./components/dashboards"
import Organization from "./components/onganization"
import Profil from "./components/profil";
import Signin from './components/signin';
import Main from "./components/main";
import Debug from "./components/debug";
import Register from "./components/register";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/signin">
            <Signin/>
        </Route>
        <Route exact path="/">
            <Register/>
        </Route>
        <Route  path='/dashboards'>
            <Dashboards/>
        </Route>
        <Route  path='/organization'>
            <Organization/>
        
        </Route>
        <Route  path='/profil'>
            <Profil/>
        
        </Route>
        <Route  path='/debug'>
            <Header/>
            <Debug/>
        
        </Route>
        <Route  path='/register'>
            <Register/>
        
        </Route>
       
    
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
