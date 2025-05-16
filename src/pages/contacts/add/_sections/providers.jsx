import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { indexContactAction } from "../../../../_actions/contacts-actions";
import { contactsLoaded } from "../_redux/contacts-add-slice";

export default function Providers({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function indexContacts() {
      var contacts = await indexContactAction();
      console.log("provider1: ", contacts);
      dispatch(contactsLoaded(contacts));
    }
    indexContacts();
  }, []);
  return <>{children}</>;
}
