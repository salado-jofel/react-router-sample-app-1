const baseUrl =
  "https://contacts-backend-53f3a-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function storeContactService(body) {
  var response = await fetch(`${baseUrl}/contacts.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
}
