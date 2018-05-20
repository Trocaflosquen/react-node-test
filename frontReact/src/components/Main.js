import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ClientsListContainer from '../containers/ClientsListContainer'
import Client from './Client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Main = props => (
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

export default Main  