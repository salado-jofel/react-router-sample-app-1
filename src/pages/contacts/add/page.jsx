import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  contactsAddButtonPressed,
  contactsRemoveButtonPressed,
} from "./_redux/contacts-add-slice";

export default function ContactsAddPage() {
  const state = useSelector((state) => state.contactsAddSlice);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <button
          onClick={() => {
            dispatch(contactsAddButtonPressed());
          }}
        >
          ADD
        </button>
        <div>{state.quantity}</div>
        <button
          onClick={() => {
            dispatch(contactsRemoveButtonPressed());
          }}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}
