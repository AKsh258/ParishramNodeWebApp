import { configureStore } from '@reduxjs/toolkit'
import contactReducer from "./Features/Counter/Contact_Demo_Slice"
import loginReducer from './Features/Counter/LoginRedux/Login_Slice'
export const store = configureStore({
  reducer: {
    contact: contactReducer, 
    loginData: loginReducer,
  },
});
