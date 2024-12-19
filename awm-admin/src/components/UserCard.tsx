import React from "react";

interface UserCardProps {
  user: {
    id: string;
    username: string;
    email: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold">{user.username}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
