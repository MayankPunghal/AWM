import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../../services/userService"; // Import the service

const EditUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Get userId from URL
  const navigate = useNavigate(); // For navigation (React Router v6)

  const [user, setUser] = useState<any>(null); // State to hold user data
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserById(userId!); // Fetch user by ID
        setUser(userData); // Set the fetched user data
      } catch (err) {
        setError("Failed to fetch user data."); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    if (userId) {
      fetchUserData(); // Fetch user data when component mounts
    }
  }, [userId]);

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Add save logic here (e.g., calling an API to update user details)
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Show error if fetching fails
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit User</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter user's name"
              defaultValue={user.username} // Populate with fetched user data
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter user's email"
              defaultValue={user.emailid} // Populate with fetched user data
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={user.role} // Populate with fetched user data
            >
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
