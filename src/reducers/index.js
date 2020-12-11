
import { combineReducers } from 'redux'
import {
    firebaseReducer as firebase 
  } from 'react-redux-firebase'
  import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import locationReducer from './location'

const rootReducer = combineReducers({
     // Add sync reducers here
     firebase: persistReducer(
        { key: 'firebaseState', storage: localStorage, stateReconciler: hardSet },
        firebase
      ),
      location: locationReducer
})

export default rootReducer