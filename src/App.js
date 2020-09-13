import React, { Component } from 'react';
import { useState } from 'react';
import Pagination from './components/UserCard/Pagination';
import FormHooks from './components/FuncLogin/FormHooks.jsx'
import UserItem from './components/UserCard/UserItem/UserItem';
import JsPracticeCard from './components/JsPractice/JsPractice'
import  SignupForm from './components/JsPractice/FormikForms/Formik';

const App = () => {
  //const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
    {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <FormHooks/>
    <UserItem/> */}
    <JsPracticeCard/>
    <SignupForm/>
    </>
  );
};
export default App;
