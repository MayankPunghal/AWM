import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService"; // This function needs to handle pagination params
import List from "../components/List";

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(100); // Default page size
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers(currentPage, pageSize);
        setUsers(response.data);
        setTotalUsers(response.total); // Assuming API returns total count
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalUsers / pageSize);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-auto">
        <List users={users} />
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserListPage;
