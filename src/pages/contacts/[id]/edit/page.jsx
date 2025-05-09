import React from "react";
import { useParams } from "react-router-dom";

export default function ContactsEditPage() {
  let params = useParams();
  return <div>EditContactPage: {params.id}</div>;
}
