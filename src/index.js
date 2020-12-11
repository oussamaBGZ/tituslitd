import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react'
import { compose, } from 'redux'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import "firebase/database";
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import createStore from './createStore'
import { createBrowserHistory } from 'history';

const initialState = {}
var fbConfig = {
  apiKey: "AIzaSyDtrGhKg1yjYErZXZSH_wTxnJ0qpxszJO8",
  authDomain: "titusltd-164f0.firebaseapp.com",
  projectId: "titusltd-164f0",
  storageBucket: "titusltd-164f0.appspot.com",
  messagingSenderId: "486343144924",
  appId: "1:486343144924:web:a5053dc7a91ef892f74b19",
  measurementId: "G-Z4F4ZZDTQC"
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(fbConfig)
const browserHistory = createBrowserHistory();

const { store, persistor } = createStore(initialState, browserHistory)
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
