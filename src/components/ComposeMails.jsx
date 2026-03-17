// src/components/ComposeMails.jsx
import React from "react";
import Sidebar from "./sidebar";

const ComposeMails = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Compose Mail</h1>
        <form className="space-y-4 bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="Recipient Email"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full border px-3 py-2 rounded h-32"
          />
          <button className="px-4 py-2 bg-yellow-300 font-bold rounded hover:bg-yellow-400">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComposeMails;