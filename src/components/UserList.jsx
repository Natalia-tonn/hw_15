import React from 'react';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className="user-list-container">
      {/* <h2 className="user-list-title">User List</h2> */}
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-list-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

