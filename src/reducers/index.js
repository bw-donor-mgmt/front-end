import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { orgReducer } from './orgReducer'
import { campReducer } from './campaignReducer'
import { donorReducer } from './donorReducer'
import { donationReducer } from './donationReducer'

export default combineReducers ({
    loginReducer,
    signupReducer,
    orgReducer,
    campReducer,
    donorReducer,
    donationReducer
})