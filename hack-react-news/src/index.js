import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from 'components/App';
import GlobalStyles from 'styles/globals';
import registerServiceWorker from './registerServiceWorker';



const renderApp = () => {
  // No intial state for now, pass in empty object for state
  const store = configureStore({});

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state printing ->');
    console.log(store.getState());
  }

  ReactDOM.render(
      <div>
        <GlobalStyles />
        <App />
      </div>,
    document.getElementById('root'),
  );
};

renderApp();


