import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="App">
      <h1 className="text-center my-4">User Management</h1>
      {editingUser ? (
        <UserForm
          currentUser={editingUser}
          onSave={() => setEditingUser(null)}
          onCancel={() => setEditingUser(null)}
        />
      ) : (
        <UserList onEdit={(user) => setEditingUser(user)} onAdd={(user) => setEditingUser(user)}/>
      )}
    </div>
  );
};

export default App;
