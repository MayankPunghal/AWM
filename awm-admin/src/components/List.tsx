import React, { useState } from "react";

interface ListProps {
  users: {
    id: string;
    username: string;
    email: string;
    gender: string;
    age: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    created_at: string;
    is_active: boolean;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    profile_picture: string;
    bio: string;
    website: string;
    twitter_handle: string;
    facebook_profile: string;
    linkedin_profile: string;
    role: string;
    subscription_type: string;
    is_verified: boolean;
    verification_code: string;
    last_password_change: string;
    recovery_email: string;
    preferred_language: string;
    timezone: string;
    newsletter_subscription: boolean;
    mobile_verified: boolean;
    email_verified: boolean;
    favorite_color: string;
    preferred_payment_method: string;
    is_admin: boolean;
    is_banned: boolean;
    bio_updated: string;
    emergency_contact_name: string;
    emergency_contact_phone: string;
    emergency_contact_relation: string;
    last_activity: string;
    status_message: string;
    social_media_links: string;
    login_attempts: number;
    last_failed_login: string;
    is_deleted: boolean;
    preferred_contact_method: string;
    education_level: string;
    occupation: string;
    company_name: string;
    marital_status: string;
    children_count: number;
  }[];
}

const List: React.FC<ListProps> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  // Function to open the modal with user data
  const handleViewClick = (user: any) => {
    setSelectedUser(user);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">User List</h1>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{user.username}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <button
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => handleViewClick(user)}
            >
              View
            </button>
          </li>
        ))}
      </ul>

      {/* Modal to show additional user details */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 shadow-lg max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{selectedUser.first_name} {selectedUser.last_name}</h3>
              <button
                onClick={handleCloseModal}
                className="text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Field</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(selectedUser).map((key) => (
                    key !== 'id' && key !== 'username' && key !== 'email' && (
                      <tr key={key} className="border-b">
                        <td className="px-4 py-2 text-sm font-medium text-gray-600 capitalize">{key.replace(/_/g, " ")}</td>
                        <td className="px-4 py-2 text-sm text-gray-900">{typeof selectedUser[key] === 'boolean'
            ? selectedUser[key] 
              ? 'Yes' 
              : 'No' 
            : selectedUser[key]}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
