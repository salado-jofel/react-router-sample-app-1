import React from "react";
import AddForm from "./_sections/add-form";
import Providers from "./_sections/providers";

export default function ContactsAddPage() {
  return (
    <Providers>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <AddForm />
      </div>
    </Providers>
  );
}
