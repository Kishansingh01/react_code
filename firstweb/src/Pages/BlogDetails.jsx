import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Common/Header';
import {blogs} from '../Data/BlogsData'

export default function BlogDetails() { // Pass 'blogs' as a prop or import it
  const uselocation = useLocation(); // Correct the typo here
  
  // Safely handle the pathname split and extract the ID
  let currentId = uselocation.pathname.split('/')[2]

  // Make sure 'blogs' exists and filter by the currentId
  let currentData =blogs.filter((v) => v.id == currentId)[0];
  
  console.log(currentData); // Debugging the filtered data
  
  return (
    <div>
      <Header />
       <h1>{currentData.title}</h1>
    </div>
  );
}
