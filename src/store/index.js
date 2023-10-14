import { configureStore } from "@reduxjs/toolkit";
import animConfigReducer from "./modules/animConfigSlice"
import horses from "./modules/horseSlice";

export const store = configureStore({
    reducer:{
        animConfig:animConfigReducer,
        horses:horses,
    },
})