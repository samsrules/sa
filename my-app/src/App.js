import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Welcome from './component/Welcome';
import Home from './component/Home';
import Login from './component/Login';
import Datalist from './component/Datalist';
import Event from './component/Event';
import Refinput from './component/Refinput';
import Dynamickey from './component/Dynamickey';
import Increment from './component/Increment';
import Timer from './component/Timer';
import TodoApp from './component/TodoApp';
import SignUpDialog from './component/SignUpDialog';
import NameForm from './component/NameForm';
import Toggle from './component/Toggle';
import Create from './component/Create';
import Show from './component/Show';




class App extends React.Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
			      <li><Link to={'/Welcome'}>Welcome</Link></li>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
				  <li><Link to={'/Datalist'}>Datalist</Link></li>
				  <li><Link to={'/Event'}>Event</Link></li>
				  <li><Link to={'/Refinput'}> Refinput</Link></li>
				  <li><Link to={'/Dynamickey'}>Dynamickey</Link></li>
				  <li><Link to={'/Increment'}>Increment</Link></li>
				   <li><Link to={'/Timer'}>Timer</Link></li>
				   <li><Link to={'/TodoApp'}>TodoApp</Link></li>
				   <li><Link to={'/SignUpDialog'}>SignUpDialog</Link></li>
				   <li><Link to={'/NameForm'}>NameForm</Link></li>
				   <li><Link to={'/Toggle'}>Toggle</Link></li>
				   <li><Link to={'/Create'}>Create</Link></li>
				   <li><Link to={'/Show'}>Show</Link></li>
				 
               </ul>
               <hr />
               
               <Switch>
			      <Route exact path='/Welcome' component={Welcome} />
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
				  <Route exact path='/Datalist' component={Datalist} />
				  <Route exact path='/Event' component={Event} />
				  <Route exact path='/Refinput' component={Refinput} />
				  <Route exact path='/Dynamickey' component={Dynamickey} />
				  <Route exact path='/Increment' component={Increment} />
				  <Route exact path='/Timer' component={Timer} />
				  <Route exact path='/TodoApp' component={TodoApp} />
				  <Route exact path='/SignUpDialog' component={SignUpDialog} />
				  <Route exact path='/NameForm' component={NameForm} />
				  <Route exact path='/Toggle' component={Toggle} />
				  <Route exact path='/Create' component={Create} />
				  <Route exact path='/Show' component={Show} />
				  
               </Switch>
            </div>
         </Router>
      );
   }
}


export default App;




