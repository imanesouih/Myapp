import { combineReducers, createStore, legacy_createStore } from 'redux'; // Changez également legacy_createStore par createStore

import usersReducer from '../reducer/users'; // Importez directement le réducteur des utilisateurs

const rootReducer = combineReducers({
    users: usersReducer, // Utilisez directement usersReducer
});

const store = legacy_createStore(rootReducer); // Utilisez createStore au lieu de legacy_createStore

export default store;
