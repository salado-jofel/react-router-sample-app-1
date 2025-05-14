import React from "react";
import { useSelector } from "react-redux";

export default function Body() {
  const state = useSelector((state) => state.contactsSlice);
  console.log("contacts state", state.contacts);
  return (
    <>
      {/* {state.contacts.map((contact, index) => (
        <div key={index}>{contact}</div>
      ))} */}
    </>
  );
}
