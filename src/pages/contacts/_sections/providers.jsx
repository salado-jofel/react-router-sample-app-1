import React, { useEffect } from "react";
import { getUsers } from "../../../_services/contacts-service";


export default function Providers({ children }) {
useEffect(() => {
  const fetchData = async () => {
    try {
      const fetchUsers = await getUsers();
      console.log("Fetched users:", fetchUsers);
    } catch (error) {
      console.error("Error fetching users from actions:", error);
    }
  };
  fetchData();
}, []);
  return <>{children}</>;
}
