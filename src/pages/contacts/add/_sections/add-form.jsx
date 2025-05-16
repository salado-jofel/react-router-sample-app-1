import React, { useEffect } from "react";
import InputField from "../../_components/input-field";
import Button from "../../_components/button";
import { useSelector, useDispatch } from "react-redux";
import {
  contactNameChanged,
  contactAddressChanged,
  contactEmailChanged,
  contactPhoneChanged,
  submitButtonPressed,
} from "../_redux/contacts-add-slice";
import { storeContactAction } from "../../../../_actions/contacts-actions";
import { ResultStatus } from "../../../../_status/result";
import { RequestStatus } from "../../../../_status/request";

export default function AddForm() {
  const state = useSelector((state) => state.contactsAddSlice);
  const dispatch = useDispatch();
  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(submitButtonPressed());
  }

  useEffect(() => {
    console.log("form request 2: ", state.requestStatus);

    if (state.requestStatus == RequestStatus.success) {
      console.log("form if request: ", state.requestStatus);
      console.log("form contacts: ", state.contacts);
      storeContactAction(state.newContact);
    } else {
      console.log("form else request: ", state.requestStatus);
    }
  }, [state.requestStatus]);

  return (
    <>
      {state.requestStatus == RequestStatus.InProgress ? (
        <div>LOADING...</div>
      ) : (
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
      )}
    </>
  );
}
