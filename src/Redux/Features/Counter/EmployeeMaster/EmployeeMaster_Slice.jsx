import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const TotalEmployee_Data = createAsyncThunk(
  "TotalEmployee_Data/According_Company",
  async (userData, { getState, rejectWithValue }) => {
    try {
      const token = getState().loginData.user.data.token;
      if (!token) {
        console.error("No token found. Please log in again.");
        return rejectWithValue("No token found. Please log in again.");
      }

      const page = userData.page || 1;
      const url = `http://localhost:4000/employee/getAll?page=${page}`;

      // Use axios directly with the Authorization header
      const response = await axios.get(url, {
        headers: { "Authorization": `Bearer ${token}` },
      });

   // In your API response, you should return an object like this:
return response.data // The employee data


 
    } catch (error) {
      console.error("Error occurred during API call:", error);
      return rejectWithValue(error.response?.data?.message || error.message || "Unknown error occurred");
    }
  }
);

// Fetching contact data from the API
export const companyName_fetched = createAsyncThunk(
  "Company_Name/fetchData",
  async () => {
    try {

      const url = `http://localhost:4000/company`; 
      const response = await axios.get(url);

      // console.log("API Response Company_Name: ", response);

      if (response.data.success) {
        return response.data.data; 
      } else {
 
        console.error("Error Message: ", response.data.message);
        throw new Error(response.data.message || "Error fetching data");
      }
    } catch (error) {
 
      console.error("Error response: ", error.response);
      console.error("Error message: ", error.message);

      // Return detailed error message
      throw new Error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);


export const BranchName = createAsyncThunk(
  "BranchName/According_Company",
  async (userData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFTVBDb2RlIjoiMDAwMSIsImVtYWlsIjoiYWRtaW5pc3RyYXRvckBnbWFpbC5jb20iLCJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzM5MTg0MTcwLCJleHAiOjE3MzkxODc3NzB9.gsbW7JoTZW_PuZ2ZbUGKq6psKv0biWFRTugxFdx3_qQ"
        },
      };
      const url = "http://localhost:4000/branches";
      const response = await axios.post(url,userData, config);
  
      console.log("Raw Response  branch------------------------->:", response.data);  

      let responseData = response.data;


      if (typeof responseData === "string") {
        try {
          responseData = JSON.parse(responseData);  
        } catch (parseError) {
   
          console.error("Failed to parse JSON response:", parseError);
          throw new Error("Invalid JSON response format");
        }
      }

   
      if (responseData.success) {
    
        // console.log("Contacts inserted successfully: ", responseData);
        return responseData;  
      } else {
  
        throw new Error(responseData.message || "Error inserting data");
      }
    } catch (error) {
  
      // console.error("Error occurred during form submission:", error);
      throw new Error(
        error.response?.data?.message || error.message || "Unknown error occurred"
      );
    }
  }
);
// Employees Acoording Selection Of Branches
export const Employees = createAsyncThunk(
  "Employees/According_Branch",
  async (userData) => {
    try {
      // const config = {
      //   headers: {
      //     "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFTVBDb2RlIjoiMDAwMSIsImVtYWlsIjoidmlrcmFudHRpd2FyaUBnbWFpbC5jb20iLCJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzM5MjUyODM1LCJleHAiOjE3MzkyNTY0MzV9.1pd7fHXy4h7ddX2vyWtbadhoyMMqHQmJFI_R0r7MHBU"
      //   },
      // };
      const {branch}=userData
      const url = `http://localhost:4000/employee/branch/${branch}`;
      const response = await axios.get(url,userData);
  
      // console.log("Raw Response  Employees------------------------->:", response.data);  

      let responseData = response.data;


      if (typeof responseData === "string") {
        try {
          responseData = JSON.parse(responseData);  
        } catch (parseError) {
   
          console.error("Failed to parse JSON response:", parseError);
          throw new Error("Invalid JSON response format");
        }
      }

   
      if (responseData.success) {
    
        // console.log("Contacts inserted successfully: ", responseData);
        return responseData;  
      } else {
  
        throw new Error(responseData.message || "Error inserting data");
      }
    } catch (error) {
  
      // console.error("Error occurred during form submission:", error);
      throw new Error(
        error.response?.data?.message || error.message || "Unknown error occurred"
      );
    }
  }
);

// Single Employee Ahter selectong EmplyId

export const singleEmployee = createAsyncThunk(
  "EmployeeId/Acordong_Branch_EmpId",
  async (userData) => {
    try {
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      const {empId}=userData
      const url = `http://localhost:4000/employee/get/${empId}`;
      const response = await axios.get(url,userData);
  
      console.log("Raw Response  Employees------------------------->:", response.data);  

      let responseData = response.data;


      if (typeof responseData === "string") {
        try {
          responseData = JSON.parse(responseData);  
        } catch (parseError) {
   
          console.error("Failed to parse JSON response:", parseError);
          throw new Error("Invalid JSON response format");
        }
      }

   
      if (responseData.success) {
    
        console.log("Contacts inserted successfully: ", responseData);
        return responseData;  
      } else {
  
        throw new Error(responseData.message || "Error inserting data");
      }
    } catch (error) {
  
      console.error("Error occurred during form submission:", error);
      throw new Error(
        error.response?.data?.message || error.message || "Unknown error occurred"
      );
    }
  }
);

const EmployeeMaster_Slice = createSlice({
  name: "EmployeeDetails",
  initialState: {
    isLoading: false,
    company: [],
    branch:[],
    allemployee:[],
    pagination:{},
    employee:[],
    single_Employee:[],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(TotalEmployee_Data.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
   
    builder.addCase(TotalEmployee_Data.fulfilled, (state, action) => {
    
      state.isLoading = false;
      state.allemployee = action.payload.data;  
      state.pagination=action.payload.pagination;
      state.error = null;
      console.log("Fetched data  state.allemployee------------------------>:", action.payload); 
    });

   
    builder.addCase(TotalEmployee_Data.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // console.error("Error occurred in rejected action:", action.error.message);
    });

    builder.addCase(companyName_fetched.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
   
    builder.addCase(companyName_fetched.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;  
      state.error = null;
      // console.log("Fetched data companyName_fetched------------------------>:", action.payload); 
    });

   
    builder.addCase(companyName_fetched.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // console.error("Error occurred in rejected action:", action.error.message);
    });

 
    builder.addCase(BranchName.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });


    builder.addCase(BranchName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.branch = action.payload.data;
      state.error = null;
    });


    builder.addCase(BranchName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(Employees.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
   
    builder.addCase(Employees.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employee = action.payload.data;  
      state.error = null;
      // console.log("Fetched data Employees------------------------>:", action.payload); 
    });

   
    builder.addCase(Employees.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // console.error("Error occurred in rejected action:", action.error.message);
    });
    builder.addCase(singleEmployee.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
   
    builder.addCase(singleEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.single_Employee = action.payload.data;  
      state.error = null;
      console.log("Fetched data Employees------------------------>:", action.payload); 
    });

   
    builder.addCase(singleEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      // console.error("Error occurred in rejected action:", action.error.message);
    });
  },
});

export default EmployeeMaster_Slice.reducer;
