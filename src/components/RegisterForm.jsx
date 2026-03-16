import { useState } from "react";

const fields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Neba Eric" },
  { id: "email", label: "Email Address", type: "email", placeholder: "kenzo@gmail.com" },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "672 678 675" },
];

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap');
        * { font-family: 'Geist', sans-serif; box-sizing: border-box; }
        input:focus { outline: none; border-color: #2563eb; }
      `}</style>

      <div className="min-h-screen bg-[#f8f8f6] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">

          <a href="/" className="flex items-center gap-2 mb-10">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#2563EB" strokeWidth="1.5"/>
              <path d="M9 16l5-5 3 3 5-6 3 4-11 10L9 16Z" fill="#2563EB"/>
            </svg>
            <span className="text-sm font-semibold tracking-widest uppercase text-slate-800">Crestlancing</span>
          </a>

          <h1 className="text-2xl font-semibold text-slate-900 mb-1">Create account</h1>
          <p className="text-sm text-slate-400 mb-8">Fill in your details to get started.</p>

          <div className="space-y-5">
            {fields.map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={e => setForm(p => ({ ...p, [id]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 text-sm transition-colors"
                />
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
            Submit
          </button>

          <p className="text-center text-xs text-slate-400 mt-5">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
          </p>

        </div>
      </div>
    </>
  );
}