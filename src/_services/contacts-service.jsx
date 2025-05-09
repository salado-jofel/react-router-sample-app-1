const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetchAllContacts:", error);
    throw error;
  }
};
