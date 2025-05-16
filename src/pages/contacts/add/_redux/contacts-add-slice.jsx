import { createSlice } from "@reduxjs/toolkit";
import contactsAddState from "./contacts-add-state";
import { RequestStatus } from "../../../../_status/request";

export const contactsAddSlice = createSlice({
  name: "contactsAddSlice",
  initialState: contactsAddState,
  reducers: {
    contactsLoaded: (state, action) => {
      const { contacts } = action.payload;

      if (contacts) {
        return {
          ...state,
          contacts: contacts,
          // requestStatus: RequestStatus.success,
        };
      } else {
        return {
          ...state,
          // requestStatus: RequestStatus.error,
        };
      }
    },
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
    submitButtonPressed: (state) => {
      const newContactArray = [...state.contacts];
      const newContact = {
        contactName: state.contactName,
        contactEmail: state.contactEmail,
        contactPhone: state.contactPhone,
        contactAddress: state.contactAddress,
      };
      console.log("newContact object: ", newContact);

      if (
        newContactArray.find(
          (key) => key.contactPhone == newContact.contactPhone
        )
      ) {
        console.log("number already exists!");
        return {
          ...state,
          requestStatus: RequestStatus.error,
        };
      } else {
        newContactArray.push(newContact);
        console.log("newContact array: ", newContactArray);
        return {
          ...state,
          requestStatus: RequestStatus.success,
          newContact: newContact,
        };
      }
    },
  },
});

export const {
  contactNameChanged,
  contactAddressChanged,
  contactEmailChanged,
  contactPhoneChanged,
  submitButtonPressed,
  contactsLoaded,
} = contactsAddSlice.actions;

export default contactsAddSlice.reducer;
