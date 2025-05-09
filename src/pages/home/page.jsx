import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Link to={"/contacts"} class="text-3xl font-bold ">
        View Contacts
      </Link>
    </div>
  );
}
