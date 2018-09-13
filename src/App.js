import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout';
import Repository from './containers/Repository';
import Issue from './containers/Issue';
import User from './containers/User'
import Home from './pages/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path='/repositories/:owner/:repo' component={Repository} />
            <Route exact path='/repos/:owner/:repo/issues/:number' component={Issue} />
            <Route exact path='/users/:username' component={User} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
