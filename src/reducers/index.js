import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth';
import { tracks } from './browse'
import { paginate } from './paginate'

//objectReturned == object from reducer
//it the same as return state == { auth : objectReturned , track : objectReturned, ... }
export default combineReducers({
  auth,
  tracks,
  paginate,
  routing : routerReducer
});
