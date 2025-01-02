import { createSlice } from "@reduxjs/toolkit";

export const gameInput = createSlice({
    name: "gameInput",
    initialState: {
      formData: {
        playerName: "",
        TenX: "",
        FiftyX: "",
        HundreadX: "",
        FiveHundreadX: "",
        Pegs: "",
        HomePrice: "",
      },
    },
    reducers: {
      updateField: (state, action) => {
        const { field, value } = action.payload;
        state.formData[field] = value;
      },

      resetForm: (state) => {
        state.formData = initialState.formData; 
      }
    },
  });

  export const { updateField, resetForm} = gameInput.actions; 
  export default gameInput.reducer; 