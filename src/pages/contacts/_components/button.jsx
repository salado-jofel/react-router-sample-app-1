import React from "react";

export default function Button({ buttonColor, buttonText, onClick, type }) {
  return (
    <button
      className={`${
        buttonColor ?? "bg-slate-100"
      } py-2 px-3 rounded-lg text-white cursor-pointer `}
      type={type ?? "button"}
      onClick={onClick}
    > 
      {buttonText ?? "Submit"}
    </button>
  );
}
