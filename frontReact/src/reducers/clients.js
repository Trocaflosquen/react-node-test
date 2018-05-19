import * as types from '../actions/actionTypes'

const clients = (state = [], action) => {
    switch (action.type) {
        case types.ADD_CLIENT:
            return [...state, action.clientData]
        break
        case types.REMOVE_CLIENT:
            return state.filter(client => client.id != clientId)
        break
        case types.UPDATE_CLIENT:
            return state.map(client => (client.id === clientId) ? clientData : client)
        break
        default:
            return state
    }
    
}

export default clients