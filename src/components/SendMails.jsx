// src/components/SendMails.jsx
import React from "react";
import Sidebar from "./sidebar";

const SendMails = () => {
  const mails = [
    { to: "john@example.com", subject: "Hello John" },
    { to: "jane@example.com", subject: "Meeting Reminder" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Sent Mails</h1>
        <table className="w-full bg-white rounded shadow">
          <thead className="bg-yellow-100">
            <tr>
              <th className="p-3 text-left">Recipient</th>
              <th className="p-3 text-left">Subject</th>
            </tr>
          </thead>
          <tbody>
            {mails.map((m, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3">{m.to}</td>
                <td className="p-3">{m.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SendMails;