const baseUrl = "http://localhost:3000";

export async function storeContactService(body) {
  console.log("body contact: ", body);
  var response = await fetch(`${baseUrl}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
}

export async function indexContactService() {
  var response = await fetch(`${baseUrl}/contacts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}
