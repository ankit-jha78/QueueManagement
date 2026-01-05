import React, { useState } from "react";
import {FaUserPlus} from "react-icons/fa";
export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //validations
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="p-5 bg-neutral-900 text-white w-96  rounded-md
      h-fit">
        <h1 className="text-blue-700 text-3xl">Add to Queue</h1>
        <div>
          <input
            type="text"
            className="w-full border-2 border-gray-700  px-3 py-2 my-4 outline-0 rounded-sm"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <select
            className="rounded-sm w-full border-2 border-gray-700 px-3 py-2 my-4 outline-0 bg-neutral-900"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>
        <button
          className="text-[18px] flex justify-center w-full  px-4 py-2 bg-blue-800 outline-0 border-0 rounded-md cursor-pointer my-4 hover:bg-blue-900"
          type="submit"
        >
        <span className="flex"> <FaUserPlus className="text-2xl"/> Add Customer</span>
        </button>
      </form>
    </>
  );
}
