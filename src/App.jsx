import React, { useState, useCallback, useMemo } from 'react';
import UserList from './components/UserList';

import "./App.css"

function App() {
  const [filter, setFilter] = useState('');

  const userList = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Dana White' },
    { id: 5, name: 'Eve Davis' },
  ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  const filterUsers = useCallback((filterText) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [userList]);


  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);
  return (
    <div className="container">
      <h1 className="title">User List</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Введите первую букву имени "
        className="filter-input"
      />
      <UserList users={filteredUsers} />
    </div>
  );
   }

export default App;



