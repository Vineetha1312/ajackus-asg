import React, { useState, useEffect } from 'react';

const UserForm = ({ currentUser, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setDepartment(currentUser.company?.name || '');
    } else {
      // Reset form fields for adding a new user
      setName('');
      setEmail('');
      setDepartment('');
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validating name and email fields
    if (!name || !email) {
      setError('Name and Email are required.');
      return;
    }
    
    const user = {
      id: currentUser?.id, 
      name,
      email,
      company: { name: department },
    };

    onSave(user); 
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Save
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
