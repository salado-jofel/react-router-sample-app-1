import { ResultStatus } from "../_status/result";
import {
  indexContactService,
  storeContactService,
} from "../_services/contacts-services";

export async function storeContactAction(contacts) {
  const { contactName, contactEmail, contactPhone, contactAddress } = contacts;

  console.log("action received contacts: ", contacts);

  const contactObject = {
    contact_name: contactName,
    contact_email: contactEmail,
    contact_phone: contactPhone,
    contact_address: contactAddress,
  };

  console.log("action contactName: ", contactName);
  console.log("action contactEmail: ", contactEmail);
  console.log("action contactPhone: ", contactPhone);
  console.log("action contactAddress: ", contactAddress);

  console.log("action contactOjbect: ", contactObject);
  try {
    var response = await storeContactService(contactObject);

    if (response.ok) {
      console.log("Response success");
      return {
        result: ResultStatus.success,
      };
    } else {
      console.error("Response Error");
      return {
        result: ResultStatus.failure,
      };
    }
  } catch (error) {
    console.error("Catch Error:", error);
    return {
      result: ResultStatus.failure,
    };
  }
}

export async function indexContactAction() {
  try {
    var response = await indexContactService();
    if (response.ok) {
      var contacts = await response.json();
      console.log("Success index:", contacts);
      return { contacts: contacts };
    } else {
      console.error("Error index response:", response);
    }
  } catch (error) {
    console.error("Error index: ", error);
  }
}
