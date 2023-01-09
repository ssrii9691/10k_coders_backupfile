import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { founderReducer } from "./reducers/FounderReducer";
export const store=configureStore({
    reducer:founderReducer,
    devTools:true,
    middleware:[thunk]
})