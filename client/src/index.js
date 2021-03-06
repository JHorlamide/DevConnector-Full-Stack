import React from 'react';
import ReactDOM from 'react-dom';

/* Sentry: Issue tracking */ 
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

/* Redux Implementation */
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

/* Redux Initialization */ 
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

/* Issue Tracking: (Sentry) */
Sentry.init({
  dsn:
    'https://445890ee234945fe8fbf5205bf12f9f8@o570065.ingest.sentry.io/5749621',
    autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
