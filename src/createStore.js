import { createStore, compose } from 'redux'
import firebase from 'firebase/app'
import 'firebase/database'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers/index'
import { updateLocation } from './reducers/location'

const persistConfig = {
  key: 'root',
  storage: localStorage
}

export default (initialState = {}, history) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers()
  )

  const persistor = persistStore(store)

  return { store, persistor }
}