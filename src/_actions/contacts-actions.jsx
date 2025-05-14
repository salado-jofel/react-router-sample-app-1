import {
  indexContactService,
  storeContactService,
} from "../_services/contacts-services";

export async function storeContactAction(
  contactName,
  contactEmail,
  contactPhone,
  contactAddress
) {
  try {
    var response = await storeContactService({
      data: {
        id: Date.now(),
        contact_name: contactName,
        contact_email: contactEmail,
        contact_phone: contactPhone,
        contact_address: contactAddress,
      },
    });

    if (response.ok) {
      var contacts = await response.json();
      console.log("Success store:", contacts);
      return contacts;
    } else {
      console.error("Error store response:", response);
      throw new Error("Failed to store contact");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function indexContactAction() {
  try {
    var response = await indexContactService();
    if (response.ok) {
      var contacts = await response.json();
      console.log("Success index:", contacts);
      return contacts;
    } else {
      console.error("Error index response:", response);
      throw new Error("Failed to fetch contacts");
    }
  } catch (error) {
    console.error("Error index: ", error);
  }
}
