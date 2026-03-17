import React from "react";
import ContactRow from "./ContactRow";
import Sidebar from "./sidebar";

const contacts = [
  { name: "John Doe", phone: "+1 (555) 123-4567", email: "john.doe@example.com" },
  { name: "Jane Smith", phone: "+1 (555) 987-6543", email: "jane.smith@example.com" },
  { name: "Michael Wright", phone: "+1 (555) 555-0192", email: "m.wright@example.com" },
];

export default function ContactsTable() {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-500 text-sm">
          <tr>
            <th className="py-3 px-6">User Name</th>
            <th className="py-3">Phone Number</th>
            <th className="py-3">Email Address</th>
            <th className="py-3 text-right pr-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <ContactRow key={i} {...c} />
          ))}
        </tbody>
      </table>
    </div>
  );
}