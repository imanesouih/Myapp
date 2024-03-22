// Importez React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importez le composant racine de votre application
import App from './App';

// Importez le Provider de react-redux
import { Provider } from 'react-redux';

// Importez le store à partir du fichier approprié
import store from './Store'; // Vérifiez le chemin pour vous assurer qu'il est correct

// Créez une racine ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application dans le root avec le store enveloppé dans le Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
  