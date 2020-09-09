import React, { Component } from 'react';
import { useState } from 'react';
import Pagination from './components/UserCard/Pagination';
import FormHooks from './components/FuncLogin/FormHooks.jsx'
import UserItem from './components/UserCard/UserItem/UserItem';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <FormHooks/>
    <UserItem/>
    </>
  );
};
export default App;
