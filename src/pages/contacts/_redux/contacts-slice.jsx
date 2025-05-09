import { createSlice } from "@reduxjs/toolkit";
import contactsState from "./contacts-state";

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState: contactsState,
  reducers: {
    contactsLoaded: (state, actions) => {
      console.log("contactsLoaded redux: ", actions.payload);
    },
  },
});

export const { contactsLoaded } = contactsSlice.actions;

export default contactsSlice.reducer;
