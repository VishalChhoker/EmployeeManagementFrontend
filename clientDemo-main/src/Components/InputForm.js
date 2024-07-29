import React, { useState } from "react";
import Employee from "../Components/Employee";
import Vendor from "../Components/Vendor";


import { useNavigate } from "react-router-dom";
const InputForm = () => {
  const [toggleButton, setToggleButton] = useState("Employee");
  const navigate = useNavigate();
  const changeButton = () => {
    if (toggleButton == "Employee") {
      setToggleButton("Vendor");
    } else {
      setToggleButton("Employee");
    }
  };
const EmployeeHandle=()=>{
 navigate("/employees");   
}
const VendorsHandle=()=>{
navigate("/vendors")
}
  return (
    <>
    <div className=" flex flex-col">

      <div className=" flex justify-center">
        <button className=" p-2 pl-6 pr-6  border bg-blue-500 font-mono text-white rounded-full hover:bg-blue-800 " onClick={changeButton}>Change to {toggleButton}</button>
      </div>
      <div className=" flex justify-center">

      {toggleButton !== "Employee" ? (
        <>
        <div className=" w-1/3">

          <Employee />
        </div>
        </>
      ) : (
        <>
        <div className=" w-1/3">

          <Vendor />
        </div>
        </>
      )}
        </div>

      <div className="flex flex-row justify-center space-x-2">
        <div>
          <button className=" p-2 pl-6 pr-6  border bg-blue-500 font-mono text-white rounded-full hover:bg-blue-800" onClick={EmployeeHandle}>See all Employees</button>
        </div>
        <div>
          <button className=" p-2 pl-6 pr-6  border bg-blue-500 font-mono text-white rounded-full hover:bg-blue-800" onClick={VendorsHandle}>See all Vendors</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default InputForm;

//employee

//vendor
