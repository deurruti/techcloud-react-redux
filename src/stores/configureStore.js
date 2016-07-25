import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import  thunk  from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/index'

const logger = createLogger();
const router = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk,router,logger)(createStore); 

export default function configureStore(initialState){
	return createStoreWithMiddleware(rootReducer,initialState);
}