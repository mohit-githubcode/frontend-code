import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupComponent from './component/signup/signup';
import {BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Redirect, Switch } from 'react-router-dom'
import LoginComponent from './component/login/login';
import FrontComponent from './component/home/front';
import LandingComponent from './component/landing/landing';
import KeydemoComponent from './component/home/Keydemo';
import LifemountComponent from './component/lifecycle/Lifemount';
import GetapiComponent from './component/Api_data/Getapi';
import PostapiComponent from './component/Api_data/Postapi';
import MyComponent from './component/MyComponent';













class App extends React.Component {


constructor(props){
  super(props)
  // this.state={loggedin : false}
    
this.state = {
  auth: false
 }
}



 
 componentDidMount() {
  
  if (JSON.parse(localStorage.getItem('loginStatus') == true )) {
    this.setState({auth:true });
  }
  else{
    this.setState({auth:false });
    

  }
 }

render() {


  
  
  
  return (
    // <SignupComponent />
    
      <Router>
      
        <Switch>
          
        {/* <Route   render={
           () => (
           this.state.auth ?  <Redirect to='/front' /> : <Redirect to='/' />
  )
         } >

</Route>  */}



        <Route path = "/get" component = {GetapiComponent}  >

         </Route>
         <Route path = "/error" component = {MyComponent}  >

</Route>

         <Route path = "/post" component = {PostapiComponent} authed={this.state.auth}>

        </Route>

          <Route path = "/key" component = {KeydemoComponent}>

         </Route>

         <Route  path = "/life" component = {LifemountComponent} >

        </Route>

         <Route  exact path = '/' component = {SignupComponent} >

         </Route>
         {/* <Route path = "/signup" component = {SignupComponent}>

         </Route> */}

         
         <Route path = "/login" component = {LoginComponent} >

         </Route>




         <Route path = "/front" component = {FrontComponent} >



        </Route>
        <Route path = "/land/:id" component = {LandingComponent}>
        </Route>

        <Route path="*" render={() => <Redirect to="/" />} />
        {/* <Route   render={
           () => (
           localStorage.getItem('loginStatus') ?  <Redirect to='/front' /> : <Redirect to='/' />
  )
         } >

</Route> */}

{/* {this.state.auth ?  <Redirect  to="/login"/> : " " } */}
         </Switch>
      </Router>
   
  )
}
}

export default App;
// render={
//   () => (
//     localStorage.getItem('loginStatus')?  <Redirect to='/front' /> : <Redirect to='/signup' />
// )


// use this
// https://medium.com/craft-academy/how-to-restrict-your-routes-and-links-in-react-js-now-with-hooks-12b395c1a2fe