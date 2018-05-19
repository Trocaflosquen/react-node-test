import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ClientsListContainer from '../containers/ClientsListContainer'
import Client from './Client'

const Main = props => (
  <div className="container">
    <h1>
      <Link to="/">Clients</Link>
    </h1>
    <Switch>
      <Route exact path='/' component={ClientsListContainer}/>
      <Route path='/client/:clientId' component={Client}/>
    </Switch>
  </div>
)

export default Main  