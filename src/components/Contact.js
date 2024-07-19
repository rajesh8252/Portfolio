import React from "react";
import logo from "../assets/resume.jpg";
const Contact = () => {
    const config={
        email:"rajeshk200101@gmail.com",
        phone:"6382527242",

    }
  return (
    <div className="flex flex-col bg-secondary px-5 p-32" id="contact">
      <div className="flex flex-col items-center pl-3 pt-3 text-white">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold">
          Contact
        </h1>
        <p className="text-white">
          If you want to more discuss in detail,please contact to me
        </p>
        <p className="py-2"><span className="font-bold">Email :</span> {config.email}</p>
        <p className="py-2"><span className="font-bold">Phone :</span> {config.phone}</p>
      </div>
    </div>
  );
};

export default Contact;
