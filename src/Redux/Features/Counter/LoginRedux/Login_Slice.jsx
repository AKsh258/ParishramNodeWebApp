import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  
  // Only return user data if authenticated
  if (!isAuthenticated) {
    return {
      user: {},
      isAuthenticated: false,
      role: null,
      name: null,
      isLoading: false,
      error: null,
    };
  }

  return {
    user: user ? JSON.parse(user) : {},
    isAuthenticated,
    role,
    name: name || null,
    isLoading: false,
    error: null,
  };
};

const saveUserToLocalStorage = (state) => {
  localStorage.setItem("user", JSON.stringify(state.user));
  localStorage.setItem("isAuthenticated", state.isAuthenticated);
  localStorage.setItem("role", state.role);
  localStorage.setItem("name", state.name);
};

// First Login API
export const loginsubData = createAsyncThunk(
  "fetch-login-data",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const response = await axios.post(
        `http://localhost:4000/element/login`,
        { email, password },
        config
      );
      console.log("Raw rESPONSE--->",response.data)
      let responseData = response.data;

      if (typeof responseData === "string") {
        // const jsonStartIndex = responseData.indexOf("{");
        // responseData = JSON.parse(responseData.slice(jsonStartIndex));
        try {
          responseData=JSON.parse(responseData)
        } catch (parseError) {
          console.error("Faild to Parse Json Response ",parseError)
          throw new Error("Invalid Json Response formate")
        }
      }

      if (responseData.success) {
        console.log("Login Successfull !!",responseData)
        return responseData;
      } else {
        return rejectWithValue(responseData.message || "Login failed");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "An unknown error occurred");
    }
  }
);

// First Logout API
export const logOut = createAsyncThunk("log-out", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await axios.get(`https://service.pess.co.in/api/logout.php`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "An unknown error occurred");
  }
});

const initialState = loadUserFromLocalStorage();

const loginSlice = createSlice({
  name: "loginDatafetch",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.role = null;
      state.name = null;
      state.error = null;
      localStorage.clear();
    }
  },
  extraReducers: (builder) => {
    // First Login and Logout
    builder.addCase(loginsubData.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    });
    builder.addCase(loginsubData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.role = action.payload.role;
      state.name = action.payload.user_name;
      saveUserToLocalStorage(state);
    });
    builder.addCase(loginsubData.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.role = null;
      state.error = action.payload || "Unknown error occurred";
    });

    builder.addCase(logOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = {};
      localStorage.clear();
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Logout failed";
    });
  }
});

export const { resetState } = loginSlice.actions;

export default loginSlice.reducer;
