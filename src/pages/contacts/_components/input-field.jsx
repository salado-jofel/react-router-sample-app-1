import React from "react";

export default function InputField({
  label,
  type,
  name,
  onChange,
  value,
  placeholder,
}) {
  return (
    <div className=" flex flex-col w-96 gap-2">
      <label className="text-sm">{label}:</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className=" bg-slate-100 border-black border rounded-md py-0.5 px-1 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}
