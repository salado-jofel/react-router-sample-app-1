import { createSlice } from "@reduxjs/toolkit";
import contactsAddState from "./contacts-add-state";

export const contactsAddSlice = createSlice({
  name: "contactsAddSlice",
  initialState: contactsAddState,
  reducers: {
    contactNameChanged: (state, action) => {
      return {
        ...state,
        contactName: action.payload,
      };
    },
    contactEmailChanged: (state, action) => {
      return {
        ...state,
        contactEmail: action.payload,
      };
    },
    contactPhoneChanged: (state, action) => {
      return {
        ...state,
        contactPhone: action.payload,
      };
    },
    contactAddressChanged: (state, action) => {
      return {
        ...state,
        contactAddress: action.payload,
      };
    },
  },
});

export const {
  contactNameChanged,
  contactAddressChanged,
  contactEmailChanged,
  contactPhoneChanged,
} = contactsAddSlice.actions;

export default contactsAddSlice.reducer;
