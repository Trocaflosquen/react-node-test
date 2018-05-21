import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import ClientsListContainer from '../containers/ClientsListContainer'
import Client from './Client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = props => (
  <div className="container">
    <h1>
      <Link to="/">Clients</Link>
    </h1>
    <Switch>
      <Route exact path='/' component={ClientsListContainer}/>
      <Route path='/client/:clientId' component={Client}/>
    </Switch>
    <ToastContainer />
  </div>
)

export default withRouter(App)  