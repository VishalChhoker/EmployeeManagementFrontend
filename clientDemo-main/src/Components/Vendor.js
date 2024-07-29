import React, { useState } from "react";
import { checkUniqueVendorEmail } from "../Components/Helper";
import axios from "axios";

const Vendor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [UPI, setUPI] = useState("");

  const NameHandle = (e) => {
    setName(e.target.value);
  };

  const UPIHandle = (e) => {
    setUPI(e.target.value);
  };
  const EmailHandle = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    // if (!checkUniqueVendorEmail(email)) {
    //   e.preventDefault();
    //   alert("Email should be unique");
    // } else {
    const request = {
      name: name,
      email: email,
      upi: UPI,
    }
      axios
        .post("http://localhost:8080/api/create/vendor ", request)
        .then((response) => {
          console.log(response);
          alert("User Data has been stored");
        })
        .catch((error) => {
          console.log(error);
                    alert("Error ! Email Already Exist")

        });
    // }
  };
  return (
    <div className=" border border-black m-5 rounded-lg bg-pink-600">
      <form className=" p-5 ">
        <div className=" flex flex-col">
          <label className="py-1  font-mono">Name</label>
          <input
            className="border border-black rounded-md px-2 pt-1 pb-1"
            placeholder="Name"
            onChange={NameHandle}
          />
        </div>
        <div className=" flex flex-col">
          <label className="py-1  font-mono">UPI</label>
          <input
            className="border border-black rounded-md px-2 pt-1 pb-1"
            placeholder="UPI"
            onChange={UPIHandle}
          />
        </div>
        <div className=" flex flex-col">
          <label className="py-1  font-mono">Email</label>
          <input
            className="border border-black rounded-md px-2 pt-1 pb-1"
            placeholder="Email"
            onChange={EmailHandle}
          />
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="p-2 pl-6 pr-6  border bg-blue-500 font-mono text-white rounded-full hover:bg-blue-800"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Vendor;
