import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Logo from "@/Components/Logo";
import axios from "axios";

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    username: "",
    password: "",
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [forceLoginData, setForceLoginData] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    post(route("login.store"), {
      onError: (err) => {
        if (err.session?.includes("already logged in")) {
          setForceLoginData({ ...data }); // Save credentials for force login
          setShowConfirmModal(true);
        }
      }
    });
  };

  const handleForceLogin = async () => {
      post(route("force-login.store"))
  };

  return (
    <>
      <Head title="Login" />
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md">
        <div className="flex justify-center mx-auto">
          <Logo />
        </div>

        <form onSubmit={submit} className="mt-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={(e) => setData("username", e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">{errors.username}</p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {errors.username && !errors.password && (
            <p className="mt-2 text-sm text-red-600">
              These credentials do not match our records.
            </p>
          )}

          <div className="mt-6">
            <button
              type="submit"
              disabled={processing}
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-800 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
            >
              {processing ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-lg font-medium text-gray-900">Active Session Detected</h2>
            <p className="mt-2 text-sm text-gray-600">
              You are already logged in on another device. Do you want to log out all other sessions and continue?
            </p>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-orange-300"
              >
                Cancel
              </button>
              <button
                onClick={handleForceLogin}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout Other Devices
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Login.layout = (page) => <GuestLayout>{page}</GuestLayout>;
