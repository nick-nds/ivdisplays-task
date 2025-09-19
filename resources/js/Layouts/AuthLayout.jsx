import { usePage, Link, router } from "@inertiajs/react";
import { useState } from "react";
import Logo from "@/Components/Logo";
import { useEcho } from "@laravel/echo-react";

export default function AuthLayout({ children }) {
  const { props } = usePage();

  const [sessionInvalid, setSessionInvalid] = useState(false);

  const sessionId = props.auth.session_id;

  useEcho(
    `sessions.${sessionId}`,
    "SessionInvalidated",
    (e) => {
      setSessionInvalid(true);
      setTimeout(() => {
        router.visit("/login");
      }, 3000);
    },
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Sidebar + Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo size={20} />
            <h1 className="text-xl font-bold text-orange-500 ml-4">Dashboard</h1>
          </div>
          <nav className="space-x-4">
            <Link href="/logout" method="post" as="button" className="text-red-500 cursor-pointer">
              Logout
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">{children}</main>

      {sessionInvalid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm">
            <h2 className="text-lg font-semibold text-red-600 mb-2">
              Session Inactive
            </h2>
            <p className="text-gray-700 mb-4">
              You have been logged out because your session became inactive.
            </p>
            <button
              onClick={() => router.visit("/login")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
