export default function UsersTable({ users }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return "—";
    return new Date(timestamp * 1000).toLocaleString(); // convert seconds → ms
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Name / Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Last Activity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Role
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {user.username}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {user.status ? (
                  <div>
                    <div className="flex items-center space-x-2 text-emerald-600">
                      <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
                      <span>Online</span>
                    </div>
                    <div
                      className="text-xs text-gray-500 truncate max-w-xs"
                      title={user.status}
                    >
                      {user.status.length > 40
                        ? user.status.substring(0, 40) + "..."
                        : user.status}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Offline</span>
                  </div>
                )}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {formatDate(user.last_activity)}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {user.role || "User"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
