import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { orgReducer } from './orgReducer'



export default combineReducers ({
    loginReducer,
    signupReducer,
    orgReducer
})