import { createSlice } from "@reduxjs/toolkit";
import contactsAddState from "./contacts-add-state";

export const contactsAddSlice = createSlice({
  name: "contactsAddSlice",
  initialState: contactsAddState,
  reducers: {
    contactsAddButtonPressed: (state) => {
      state.quantity = state.quantity + 1;
      console.log("ADD button pressed redux: ", state.quantity);
    },
    contactsRemoveButtonPressed: (state) => {
      if (state.quantity > 0) {
        state.quantity = state.quantity - 1;
        console.log("REMOVE button pressed redux: ", state.quantity);
      }
    },
  },
});

export const { contactsAddButtonPressed, contactsRemoveButtonPressed } =
  contactsAddSlice.actions;

export default contactsAddSlice.reducer;
