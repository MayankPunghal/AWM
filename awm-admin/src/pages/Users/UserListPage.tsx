import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { getUsers } from "../../services/userService";
import UserTable from "../../components/UserTable";
import Spinner from "../../components/Spinner";

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(1000);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsers(currentPage, pageSize, searchQuery);
      setUsers(response.users);
      setTotalRecords(response.totalCount);
      if (response.users.length > 0 && selectedColumns.length === 0) {
        setSelectedColumns(Object.keys(response.users[0]));
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 3 || searchQuery.length === 0) fetchUsers();
  }, [currentPage, pageSize, searchQuery]);

  const totalPages = Math.ceil(totalRecords / pageSize);

  const handleSearch = () => {
    setCurrentPage(1);
    setUsers([]);
    fetchUsers();
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setUsers([]);
    setCurrentPage(1);
  };

  const handleEdit = (userId: string | number) => {
    console.log("Edit user with ID:", userId);
    navigate(`/edit-user/${userId}`);
  };

  const handleDelete = (userId: string | number) => {
    console.log("Delete user with ID:", userId);
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search users..."
          className="border p-2 rounded mb-2"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
        >
          Search
        </button>
        <button
          onClick={handleClearSearch}
          className={`px-4 py-2 rounded ml-2 ${
            searchQuery.length === 0
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
          disabled={searchQuery.length === 0}
        >
          Clear Search
        </button>
      </div>

      <div className="mb-4 flex items-center">
        <span className="text-lg font-semibold mr-2">Total Records:</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-xl">
          {totalRecords}
        </span>
      </div>

      {loading ? <Spinner /> : null}

      <div className="overflow-auto">
        <UserTable
          users={users}
          selectedColumns={selectedColumns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
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
