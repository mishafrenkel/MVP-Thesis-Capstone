import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import GlobalStyles from 'styles/globals';
const renderApp = () => {

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state ->');
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


