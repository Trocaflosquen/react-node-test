import { combineReducers } from 'redux'
import { routerReducer as routing} from 'react-router-redux'

import clients from './clients'

const reducer = combineReducers({clients, routing})

export default reducer