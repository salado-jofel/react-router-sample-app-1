import { configureStore } from "@reduxjs/toolkit";
import { contactsAddSlice } from "../pages/contacts/add/_redux/contacts-add-slice";
import { contactsSlice } from "../pages/contacts/_redux/contacts-slice";

export const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice.reducer,
    contactsAddSlice: contactsAddSlice.reducer,
  },
});
