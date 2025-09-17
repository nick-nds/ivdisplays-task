import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Logo from "@/Components/Logo";

export default function Login() {
  return (
    <>
      <Head title="Login" />
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md">
        <div className="flex justify-center mx-auto">
          <Logo />
        </div>

        <form className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg 
                         focus:border-blue-400 focus:ring-blue-300 
                         focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800"
              >
                Password
              </label>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg 
                         focus:border-blue-400 focus:ring-blue-300 
                         focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize 
                         transition-colors duration-300 transform bg-blue-800 rounded-lg 
                         hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 
                         focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

Login.layout = (page) => <GuestLayout>{page}</GuestLayout>;
