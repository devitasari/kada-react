import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter'
import userReducer from './reducer/user'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})

export default store
