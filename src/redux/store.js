import { configureStore } from "@reduxjs/toolkit";
import gameInput from "./gameInput";

export default configureStore({
    reducer:{gameInput: gameInput}, 
}); 

