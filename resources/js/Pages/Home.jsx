import { Link } from "@inertiajs/react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Portal</h1>
        <p className="text-gray-600 mb-6">
          Please log in to access your dashboard.
        </p>
        <Link
          href="/login"
          className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

