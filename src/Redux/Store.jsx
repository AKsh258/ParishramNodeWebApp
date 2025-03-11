import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./Features/Counter/Contact_Demo_Slice";
import loginReducer from './Features/Counter/LoginRedux/Login_Slice';
import EmployeeMasterReducer from "./Features/Counter/EmployeeMaster/EmployeeMaster_Slice";
import activeSectionReducer from "./Features/Counter/ActiveSectionSlice";
import employeeSubmitReducer from "./Features/Counter/EmployeeMaster/Employee_Submit_Slice"
export const store = configureStore({
  reducer: {
    contact: contactReducer,
    loginData: loginReducer,
    employee: EmployeeMasterReducer,
    activeSection: activeSectionReducer,
    employeeSubmit:employeeSubmitReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['TotalEmployee_Data/According_Company', 'companyName_fetched/fetchData','BranchName/According_Company','Employees/According_Branch'],
        ignoredPaths: ['employee.allemployee', 'employee.pagination'],
      },
    }),
});
