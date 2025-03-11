import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const insertEmployeeMaster = createAsyncThunk(
  "EmployeeMaster_Submit/For_OnBoarding",
  async (userData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = "http://localhost:4000/employee/update";
      const response = await axios.post(url, userData, config);

      console.log("Raw Response:", response.data);  

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


const EmployeeMaster_submitSlice = createSlice({
  name: "EmployeeMaster/SubmitForm",
  initialState: {
    isLoading: false,
    Employee_Submit: [],  
    error: null,
  },
  extraReducers: (builder) => {

 
    builder.addCase(insertEmployeeMaster.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });


    builder.addCase(insertEmployeeMaster.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Employee_Submit = action.payload;
      state.error = null;
    });


    builder.addCase(insertEmployeeMaster.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default EmployeeMaster_submitSlice.reducer;
