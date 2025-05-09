import { configureStore } from "@reduxjs/toolkit";
import { contactsAddSlice } from "../pages/contacts/add/_redux/contacts-add-slice";

export const store = configureStore({
  reducer: {
    contactsAddSlice: contactsAddSlice.reducer,
  },
});
