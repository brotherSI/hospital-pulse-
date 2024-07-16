import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="hospitalpulse"
            className="mb-12 h-10 w-fit"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
