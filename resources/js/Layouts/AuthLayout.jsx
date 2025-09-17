import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "@/Components/Logo";

export default function AuthLayout({ children }) {
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
    </div>
  );
}
