import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetching contact data from the API
export const companyName_fetched = createAsyncThunk(
  "Company_Name/fetchData",
  async () => {
    try {
      const url = `http://localhost:4000/company`;
      const response = await axios.get(url);

      // console.log("API Response Company_Name----:", response.data);

      
      if (response.data.success) {
        return response.data.data; 
      } else {
        // If success is false, throw an error
        throw new Error(response.data.message || "Error fetching data");
      }
    } catch (error) {
      // Handle errors: network or bad responses
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
        },
      };
      const url = "http://localhost:4000/branches?companyCode=${userData.CompanyCode}";
      const response = await axios.get(url, config);
  
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
    employee: [],
    branch:[],  
    error: null,
  },
  extraReducers: (builder) => {

    builder.addCase(companyName_fetched.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

   
    builder.addCase(companyName_fetched.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employee = action.payload;  
      state.error = null;
      console.log("Fetched data companyName_fetched------------------------>:", action.payload); 
    });

   
    builder.addCase(companyName_fetched.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.error("Error occurred in rejected action:", action.error.message);
    });

 
    builder.addCase(BranchName.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });


    builder.addCase(BranchName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.branch = action.payload;
      state.error = null;
    });


    builder.addCase(BranchName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default EmployeeMaster_Slice.reducer;
