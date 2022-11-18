import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import NewsList from './NewsList'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

 
  return (
    // <BrowserRouter>
    <>
      
    <NewsList></NewsList>
    </>
//     {/* <Paginate></Paginate> */}
//     <Link
//   to={{
//     pathname: `/${articles.url}`,
//     state: { post },
//   }}
// >
//   <button type="button" className={styles.btns}>{post.author}</button>
// </Link>
//   </BrowserRouter>
  );
}

export default App;
