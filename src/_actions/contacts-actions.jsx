import { storeContactService } from "../_services/contacts-services";

export async function storeContactAction(
  contactName,
  contactEmail,
  contactPhone,
  contactAddress
) {
  try {
    var response = await storeContactService({
      contact_name: contactName,
      contact_email: contactEmail,
      contact_phone: contactPhone,
      contact_address: contactAddress,
    });

    if (response.ok) {
      var contacts = await response.json();
      console.log("Success:", contacts);
      return contacts;
    } else {
      console.error("Error response:", response);
      throw new Error("Failed to store contact");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
