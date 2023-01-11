import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultstate } from "./defaultstate";
import axios from "axios";

export const getallcreatorsAsyncAction = createAsyncThunk(
  "creators/getallcreatorsAsyncAction",
  async () => {
    const response = await axios.get("http://localhost:3200/users");
    return response.data;
  }
);

export const addcreatorAsyncAction = createAsyncThunk(
  "creators/addcreatorAsyncAction",
  async (creator) => {
    const resp = axios.post("http://localhost:3200/users", creator);
    const response = await axios.get("http://localhost:3200/users");
    return response.data;
  }
);

export const deletecreatorAsyncAction = createAsyncThunk(
  "creators/deletecreatorAsyncAction",
  async (creator) => {
    const resp = axios.delete("http://localhost:3200/users/" + creator.id);
    const response = await axios.get("updatecreatorAsyncAction");
    return response.data;
  }
);

export const updatecreatorAsyncAction=createAsyncThunk(
    "creators/updatecreatorAsyncAction",
    async (creator)=>{
        const resp=axios.put ("http://localhost:3200/users/"+creator.id,creator);
        const response=await axios.get("http://localhost:3200/users/");
        return response.data
    }
)

export const creatorsSlice = createSlice({
  name: "creators",
  initialState: defaultstate,
  reducers: {
    addcreatorsAction: (state, action) => {
      state.creators.push(action.payload);
    },
    deletecreatorsAction: (state, action) => {
      state.creators = state.creators.filter(
        (cre) => cre.id !== action.payload.id
      );
    },
    updatecreatorsAction: (state, action) => {
      state.creators.forEach((cre, i) => {
        if (cre.email === action.payload.email) {
          state.creators[i] = action.payload;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getallcreatorsAsyncAction.fulfilled, (state, action) => {
      state.creators = action.payload;
    });
    builder.addCase(addcreatorAsyncAction.fulfilled, (state, action) => {
      state.creators = action.payload;
    });
    builder.addCase(deletecreatorAsyncAction.fulfilled, (state, action) => {
        state.creators = action.payload;
      });
      builder.addCase(updatecreatorAsyncAction.fulfilled, (state, action) => {
        state.creators = action.payload;
      });
  },
});

export default creatorsSlice.reducer;
export const { addcreatorsAction, deletecreatorsAction, updatecreatorsAction } =
  creatorsSlice.actions;
