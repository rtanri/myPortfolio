import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../index.css';
import Semantic1 from './Semantic1'
import Portfolio from './Portfolio'
import Project1 from '../projects/Project1'
import Project2 from '../projects/Project2'
import Project3 from '../projects/Project3'
import Project4 from '../projects/Project4'
import Project5 from '../projects/Project5'
import Project6 from '../projects/Project6'
import MoProject1 from '../projects/MoProject1'
import MoProject2 from '../projects/MoProject2'
import Game1 from '../projects/Game1'
import Game2 from '../projects/Game2'
import Game3 from '../projects/Game3'


export class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path='/' exact component={Portfolio} />
            <Route path='/react-semanticui' component={Semantic1} />
            <Route path='/would-you-rather' component={Project1} />
            <Route path='/e-library' component={Project2} />
            <Route path='/resto-reviewer' component={Project3} />
            <Route path='/freshstart' component={Project4} />
            <Route path='/beautylash' component={Project5} />
            <Route path='/caloric-keep' component={Project6} />
            <Route path='/reactnative-flash-card' component={MoProject1} />
            <Route path='/reactnative-fitness-app' component={MoProject2} />
            <Route path='/frogger' component={Game1} />
            <Route path='/flip-card' component={Game2} />
            <Route path='/job-hunter' component={Game3} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}


export default App;