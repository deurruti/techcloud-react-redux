import SC from 'soundcloud'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';
import App from './components/App';
import Callback from './components/Callback';
import { BrowseContainer }  from './components/Browse'

require('../styles/index.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);



ReactDOM.render(
  <Provider store={store}>
      <Router history={history} >
          <Route path="/" component={App} >
              <IndexRoute component={BrowseContainer}/>
              <Route path="/browse" component={BrowseContainer}/>
            <Route path="/callback" component={Callback} />
          </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
);
