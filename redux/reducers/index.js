import { combineReducers } from 'redux'
import DrawerReducer from './drawer.reducer'

const rootReducer = combineReducers({ drawer: DrawerReducer })

export default rootReducer
