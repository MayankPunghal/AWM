import React from "react";

interface UserTableProps {
  users: any[];
  selectedColumns: string[];
}

const UserTable: React.FC<UserTableProps> = ({ users, selectedColumns }) => {
  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            {selectedColumns.map((column) => (
              <th key={column} className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                {column.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              {selectedColumns.map((column) => (
                <td key={column} className="px-4 py-2 text-sm text-gray-900">
                  {typeof user[column] === 'boolean' ? (user[column] ? 'Yes' : 'No') : user[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
