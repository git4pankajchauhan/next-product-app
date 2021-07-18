import { combineReducers } from 'redux'
import DrawerReducer from './drawer.reducer'
import ProductReducer from './product.reducer'

const rootReducer = combineReducers({ drawer: DrawerReducer, product: ProductReducer })

export default rootReducer
