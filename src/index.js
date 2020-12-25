import React from 'react'; 
import ReactDOM from 'react-dom';
import './styles/App.css'; // the CSS file which compiled by Less compiler.
import './styles/imports.css' // the CSS file for import fonts.
import App from './App'; // Root Component where is application works on.
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux' // the following elements are necessary to work with redux.
import {createStore} from 'redux' 
import rootReducer from './store/reducers/index' // combined reducer for all reducers.


let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
