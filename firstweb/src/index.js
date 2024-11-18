import React from 'react';                                    
import ReactDOM from 'react-dom/client';                      
//import './index.css';                                         
// import Password from './Password';
import reportWebVitals from './reportWebVitals'               
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/Course';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Error404 from './Pages/Error404';
//import Header from './Common/Header';
// import Login_Modal from './Login_Modal';
// import FAQ from './FAQ';
// import ParentComponent from './FAQ';
//import FAQ_Props from './FAQ_Props';
// import App from './FAQ';
//import Notification from './Notification'
//import App1 from './To_Do_List';
//import Tabbing from './Tabbing';                               

const root = ReactDOM.createRoot(document.getElementById('root'));    
 let allRoutes=createBrowserRouter(
  [ 
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path:'course',
      element:<Course/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
    path:'blog/:id',
    element:<BlogDetails/>
    },
    {
      path:'*',
      element:<Error404/>
    }
   
  ]
 )    
root.render(                                                    
  <React.StrictMode>                                            
    {/* <Password /> */}
    {/* <Login_Modal/> */}
    {/* <Notification/> */}
    {/* <FAQ_Props/> */} 
    {/* <App1/> */}
    {/* <Tabbing/>                                                    */}
    <RouterProvider router={allRoutes}/>
    </React.StrictMode>                                          
);

// {/* // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */}
reportWebVitals();                                                

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals'; // You can import this, although it’s optional
// import FAQ from './FAQ'; // Assuming FAQ is a component located in the same directory
// import App from './FAQ';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();  // Uncomment this line if you want to enable reportWebVitals

