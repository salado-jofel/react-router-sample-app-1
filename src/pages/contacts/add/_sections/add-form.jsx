import React from "react";
import InputField from "../../_components/input-field";
import Button from "../../_components/button";
import { useSelector, useDispatch } from "react-redux";
import {
  contactNameChanged,
  contactAddressChanged,
  contactEmailChanged,
  contactPhoneChanged,
} from "../_redux/contacts-add-slice";
import { storeContactAction } from "../../../../_actions/contacts-actions";

export default function AddForm() {
  const state = useSelector((state) => state.contactsAddSlice);
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactName = formData.get("contactName");
    const contactEmail = formData.get("contactEmail");
    const contactPhone = formData.get("contactPhone");
    const contactAddress = formData.get("contactAddress");
    storeContactAction(contactName, contactEmail, contactPhone, contactAddress);
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="bg-white w-3xl  items-center justify-center  rounded-2xl shadow-2xl flex flex-col gap-4 p-4"
    >
      <InputField
        name={"contactName"}
        label={"Contact Name"}
        value={state.contactName}
        placeholder={"Enter contact name"}
        onChange={(e) => {
          dispatch(contactNameChanged(e.target.value));
        }}
      />
      <InputField
        name={"contactEmail"}
        label={"Contact Email"}
        value={state.contactEmail}
        placeholder={"Enter contact email"}
        onChange={(e) => {
          dispatch(contactEmailChanged(e.target.value));
        }}
      />
      <InputField
        name={"contactPhone"}
        label={"Contact Phone"}
        value={state.contactPhone}
        placeholder={"Enter contact phone"}
        onChange={(e) => {
          dispatch(contactPhoneChanged(e.target.value));
        }}
      />
      <InputField
        name={"contactAddress"}
        label={"Contact Address"}
        value={state.contactAddress}
        placeholder={"Enter contact address"}
        onChange={(e) => {
          dispatch(contactAddressChanged(e.target.value));
        }}
      />
      <Button
        buttonColor={"bg-green-500"}
        buttonText={"Submit"}
        type={"submit"}
      />
    </form>
  );
}
