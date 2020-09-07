import React, { Component } from 'react';
import { useState } from 'react';
import Pagination from './components/UserCard/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
  );
};
export default App;
