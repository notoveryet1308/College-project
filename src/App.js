import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home-pages/homepage';
import Rentpage from './pages/rent-pages/rentpage';
import Housepage from './pages/house-page/housepage';
import Signuppage from './pages/signup-page/signuppage';
import Loginpage from './pages/login-page/loginpage';
import Addpropertypage from './pages/add-property-page/addpropertypage';


function App() {
  return (
    <div className="App">

      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/rent/:city' render={(routeProps)=> <Rentpage {...routeProps}/>}/>
         <Route exact path='/buy' component={Buy}/>
         <Route exact path='/rent/:city/:id/:indexID' render={(routeProps)=> <Housepage {...routeProps}/>}/>
         <Route exact path='/signup' render={()=> <Signuppage/>}/>
         <Route exact path='/login' render={()=> <Loginpage/>} />
         <Route exact path='/add-a-property' render={()=> <Addpropertypage/>} />
      </Switch>
    </div>
  );
}

function Buy(){
  return(
      <div className="buy-route">
        <h1>Sorry, this route is under maintenance.</h1>
      </div>
  )
}

export default App;
