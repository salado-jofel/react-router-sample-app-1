import React from "react";
import Providers from "./_sections/providers";
import Body from "./_sections/body";

export default function ContactsPage() {
  return (
    <Providers>
      <div className="flex flex-col items-center justify-center h-full gap-y-4">
        <Body />
      </div>
    </Providers>
  );
}
