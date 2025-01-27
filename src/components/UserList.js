import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null); 
  const [formVisible, setFormVisible] = useState(false); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  const handleSave = (user) => {
    if (user.id) {
      // Update an existing user
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? user : u))
      );
    } else {
      // Add a new user
      setUsers((prevUsers) => [
        ...prevUsers,
        { ...user, id: prevUsers.length + 1 }, 
      ]);
    }
    setFormVisible(false); 
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>User List</h2>
        <button
          onClick={() => {
            setCurrentUser(null);
            setFormVisible(true); 
          }}
          className="btn btn-success"
        >
          Add User
        </button>
      </div>

      {formVisible ? (
        <UserForm
          currentUser={currentUser} 
          onSave={handleSave} 
          onCancel={() => setFormVisible(false)} 
        />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.split(' ')[0]}</td>
                <td>{user.name.split(' ')[1]}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button
                    onClick={() => {
                      setCurrentUser(user); 
                      setFormVisible(true); 
                    }}
                    className="btn btn-primary btn-sm m-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger btn-sm m-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
