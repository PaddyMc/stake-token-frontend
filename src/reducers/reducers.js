import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import stake from './stake-reducers'

export default combineReducers({
  stake,
  form: formReducer
})