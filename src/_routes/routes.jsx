import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/page";
import ContactsPage from "../pages/contacts/page";
import ContactsAddPage from "../pages/contacts/add/page";
import ContactsShowPage from "../pages/contacts/[id]/page";
import ContactsEditPage from "../pages/contacts/[id]/edit/page";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "/contacts/add", element: <ContactsAddPage /> },
  { path: "/contacts/:id", element: <ContactsShowPage /> },
  { path: "/contacts/:id/edit", element: <ContactsEditPage /> },
]);

export default routes;
