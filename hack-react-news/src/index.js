import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
import registerServiceWorker from './registerServiceWorker';

setGlobalStyles();

ReactDOM.render(<App />, document.getElementById('root'));

// const renderApp = () => {
//   // No intial state for now, pass in empty object for state
//   const store = configureStore({});

//   if (process.env.NODE_ENV !== 'production') {
//     console.log('Initial state printing ->');
//     console.log(store.getState());
//   }

//   ReactDOM.render(
//     <Provider store={store}>
//       <div>
//         <GlobalStyles />
//         <App />
//       </div>,
//     </Provider>,
//     document.getElementById('root'),
//   );
// };

// renderApp();

// registerServiceWorker();
