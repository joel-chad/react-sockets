import React, {Component} from 'react';
import Navbar from './components/Navbar'
import './styles/index.css'
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Activity from './components/Activity';
import Friendslist from './components/Friendslist';
import NotificationsList from './components/NotificationsList';

class App extends Component {
  state = {
    
  }



  render(){
    return(
    <div className='App'>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route path='/chat' component={Activity}/>
      <Route path='/friends' component={Friendslist}/>
      <Route path='/notifications' component={NotificationsList}/>
    </div>
  )};
}

export default App;
