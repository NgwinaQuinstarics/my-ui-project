import { Users, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-blue-400 min-h-screen p-6">
      

      <nav className="space-y-4">
        <Link to="/contacts" className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-blue-100">
          <Users size={18} />
          Contacts
        </Link>

        <Link to="/compose" className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-blue-100">
          <Mail size={18} />
          Compose Mail
        </Link>

        <Link to="/send" className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-blue-100">
          <Send size={18} />
          Send Mail
        </Link>
      </nav>
    </aside>
  );
}