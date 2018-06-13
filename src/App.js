import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {css} from 'glamor';
import Home from './components/Home';
import Battle from './components/Battle';
import Result from './components/Result';
import Popular from './components/Popular';
import Navigation from './components/Navigation';

let container =css({
    maxWidth: 1440,
    maxHeight: 83,
    backgroundColor: '#343434',
    margin:'auto'
})
class App extends Component {
  render() {
    return (
     <Router>
        <div className ={`${container}`}>
        <Navigation />
        <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path ='/battle' component = {Battle} /> 
         <Route path ='/battle/results' component={Result} />
         <Route path ='/popular' component={Popular} />
         <Route render={function(){
         	return <p>Not Found</p>
         }} />
        </Switch>
        
        </div>
      </Router>
    );
  }
}

export default App;
