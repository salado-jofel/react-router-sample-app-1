import { RequestStatus } from "../../../../_status/request";

const contactsAddState = {
  contacts: [],
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  contactAddress: "",
  newContact: {},
  requestStatus: RequestStatus.inProgress,
};

export default contactsAddState;
