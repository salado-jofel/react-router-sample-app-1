import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { indexContactAction } from "../../../_actions/contacts-actions";
import { contactsLoaded } from "../_redux/contacts-slice";

export default function Providers({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function indexContacts() {
      var contacts = await indexContactAction();
      dispatch(contactsLoaded(contacts));
    }
    indexContacts();
  }, []);

  return <>{children}</>;
}
