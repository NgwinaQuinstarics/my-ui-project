import React from "react";
import RegisterForm from "./components/RegisterForm";
import ContactsTable from "./components/ContactsTable";
import ComposeMails from "./components/ComposeMails";
import SendMails from "./components/SendMails";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto p-6 space-y-10">
        <section className="bg-white p-6 rounded-xl shadow">
          <RegisterForm />
        </section>
        <section className="bg-white p-6 rounded-xl shadow">
          <ContactsTable />
        </section>
        <section className="bg-white p-6 rounded-xl shadow">
          <ComposeMails />
        </section>
        <section className="bg-white p-6 rounded-xl shadow">
          <SendMails />
        </section>
      </main>
    </div>
  );
}

export default App;