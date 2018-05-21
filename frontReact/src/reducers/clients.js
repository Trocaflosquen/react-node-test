import * as types from '../actions/actionTypes'

const clients = (state = [], action) => {
    switch (action.type) {
        case types.ADD_CLIENT:
            return [...state, action.clientData]
        break
        case types.REMOVE_CLIENT:
            return state.filter(client => client.id != action.clientId)
        break
        case types.UPDATE_CLIENT:
            return state.map(client => (client.id === action.clientId) ? clientData : action.client)
        break
        case types.FILL_CLIENT_LIST:
            return [...action.clients]
        break
        default:
            return state
    }
    
}

export default clients