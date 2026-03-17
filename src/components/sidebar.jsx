import { Users, Mail, Send } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">

      <div className="flex items-center gap-3 mb-10">
        <img src={logo} alt="logo" className="w-10 h-10" />
       
      </div>

      <nav className="space-y-4">

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-blue-100 text-blue-700 font-medium">
          <Users size={18}/>
          Contacts
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100">
          <Mail size={18}/>
          Mails
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100">
          <Send size={18}/>
          Send Mail
        </button>

      </nav>
    </aside>
  );
}