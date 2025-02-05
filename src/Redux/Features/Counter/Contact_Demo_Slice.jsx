import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetching contact data from the API
export const Contact_Demo_fetched = createAsyncThunk(
  "Contact_Demo_fetched/fetchData",
  async () => {
    try {
      const url = `http://localhost:4000/contect-us`;
      const response = await axios.get(url);

      console.log("API Response----:", response.data);

      
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
export const insertContact_Demo = createAsyncThunk(
  "insertContact_Demo/Contact_Input",
  async (userData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = "http://localhost:4000/contect-us";
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


const Contact_DemoSlice = createSlice({
  name: "Contact_Demo",
  initialState: {
    isLoading: false,
    contact: [],  
    error: null,
  },
  extraReducers: (builder) => {

    builder.addCase(Contact_Demo_fetched.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

   
    builder.addCase(Contact_Demo_fetched.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contact = action.payload;  
      state.error = null;
      console.log("Fetched data------------------------>:", action.payload); 
    });

   
    builder.addCase(Contact_Demo_fetched.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.error("Error occurred in rejected action:", action.error.message);
    });

 
    builder.addCase(insertContact_Demo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });


    builder.addCase(insertContact_Demo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contact = action.payload;
      state.error = null;
    });


    builder.addCase(insertContact_Demo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default Contact_DemoSlice.reducer;
