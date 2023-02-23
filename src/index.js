//Importing React and ReactDOM to use in the below react root element creation/render
import React from 'react';
import ReactDOM from 'react-dom/client';
//Importing App component from App.js to create the react element displayed to the user
import App from './App';
/*Importing Provider component from react-redux to ensure application has access to the store which is needed to ensure each component has
access to the relevant slices of state */
import { Provider } from 'react-redux';
//Importing store implementation created using configureStore function
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Implementing the Provider component and passing store as one of its props to ensure the store is correctly implemented
  <Provider store={store}>
    <App />
  </Provider>
);