import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import Main from './Main'
import * as actionCreators from '../actions/actionCreators'

const mapStateToProps = ({clients}) => ({clients})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
