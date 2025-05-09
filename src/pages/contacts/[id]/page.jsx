import React from "react";
import { useParams } from "react-router-dom";

export default function ContactsShowPage() {
  let params = useParams();
  return <div>ShowContactPage: {params.id}</div>;
}
