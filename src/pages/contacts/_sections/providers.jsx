import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Providers({ children }) {
  //   const state = useSelector((state) => state.contactsSlice);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchUsers = await getUsers();
  //       console.log("Fetched users:", fetchUsers);
  //     } catch (error) {
  //       console.error("Error fetching users from actions:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return <>{children}</>;
}
