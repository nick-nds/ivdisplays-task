import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "@/Components/Logo";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo size={20} />
            <h1 className="text-xl font-bold text-orange-500 ml-4">Acme</h1>
          </div>
          <nav>
            <Link href="/" className="text-gray-600 hover:underline">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex items-center justify-center">{children}</main>

      {/* Footer */}
      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} My App
        </p>
      </footer>
    </div>
  );
}
