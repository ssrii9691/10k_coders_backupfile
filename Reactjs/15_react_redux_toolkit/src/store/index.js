import { configureStore, getDefaultMiddleware,  } from "@reduxjs/toolkit";
import creatorReducer from "./slices/CreatorSlice";
export const store = configureStore({
  reducer: {
    creators: creatorReducer,
  },
  middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware({
    serializableCheck:false
   })
 
});
