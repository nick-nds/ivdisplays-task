import React from "react";
import { Link } from "@inertiajs/react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Sidebar + Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
          <nav className="space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:underline">
              Dashboard
            </Link>
            <Link href="/settings" className="text-gray-600 hover:underline">
              Settings
            </Link>
            <Link href="/logout" method="post" as="button" className="text-red-500">
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
