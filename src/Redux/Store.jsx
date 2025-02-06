import { configureStore } from '@reduxjs/toolkit'
import contactReducer from "./Features/Counter/Contact_Demo_Slice"
import loginReducer from './Features/Counter/LoginRedux/Login_Slice'
import EmployeeMasterReducer from "./Features/Counter/EmployeeMaster/EmployeeMaster_Slice"
export const store = configureStore({
  reducer: {
    contact: contactReducer, 
    loginData: loginReducer,
    employee:EmployeeMasterReducer
  },
});
