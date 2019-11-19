import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Users from'./Users'
import Post from './Post'
import Comment from './Comment'
import './App.css';


class App extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
     return (
  <Router>
    <div className="App">
      <Route exact path={'/'} render={()=> <Users/>}/>
     <Switch>
      <Route exact path={'/Post/:id'} render={(props)=><Post id={props.match.params.id}/>}/>
      <Route exact path={'/Comment/:postId'} render={(props)=><Comment postId={props.match.params.postId}/>}/>
      </Switch>
    </div>
    </Router>
    )
     }
}

export default App;
