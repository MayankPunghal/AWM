import React, { memo } from "react";
import HamburgerMenu from "./HamburgerMenu";

interface UserTableProps {
  users: any[];
  selectedColumns: string[];
  onEdit: (userId: string | number) => void;
  onDelete: (userId: string | number) => void;
}

const UserTable: React.FC<UserTableProps> = memo(({ users, selectedColumns, onEdit, onDelete}) => {
  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            {selectedColumns.map((column) => (
              <th key={column} className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                {column.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId} className="border-b">
              <td>
                <HamburgerMenu
                  userId={user.userId}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </td>
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
});

export default UserTable;
