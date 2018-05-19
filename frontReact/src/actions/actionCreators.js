import * as types from './actionTypes'

export const addClient = clientData =>
  ({ type: types.ADD_CLIENT, clientData})

export const removeClient = (clientId) =>
  ({type: types.REMOVE_CLIENT, clientId})  

export const updateClient = (clientId, clientData) =>
  ({ type: types.UPDATE_CLIENT, clientData })  