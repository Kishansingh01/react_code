            //       Show or Hide Password

           import './App.css';
           import './Password.css';
           import btnModule from "./Botton.module.css"
           import {useState} from 'react';
          // import setPstatus from 'react';
          // import pstatus from 'react';
           function Anpp(){
             let [status,setStatus]=useState(false);
             let[pstatus,setPstatus]=useState(false);
             let [menuStatus,setMenuStatus]=useState(false)
             return (
               <div className="App">
                <button className='micon'onClick={()=>setMenuStatus(!menuStatus)}>
                  {menuStatus ?
                    <span>&times;</span>
                    :
                    <span>&#9776;</span>
                  }
                  </button>
                <div className={`menu ${menuStatus ? 'activeMenu':''}`}>    
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Course</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                  </ul>
                 </div>
                 {/* <input type="text" name="Usrname"><button>gyjjh</button> */}
                 <h1>I am kishan</h1>
                 <p>Hello My Dear Friends</p>

                 

                <input type={pstatus ? 'text' : 'password'}/>
                <button onClick={()=>setPstatus(!pstatus)}>
                    {pstatus ? 'Hide':'Show'}
                </button>
                <br/>
                 <button className={btnModule.error}>Error</button>
                 <button className={btnModule.warning}>Demo</button>
                 <button onClick={()=>setStatus(!status)}>
                   
                     {(status)?'Hide':'Show'}
                   </button>
                   {
                     (status) ?   <p className='para'>Welcome to WS</p> :  ''
                          }
                      </div>
                    );
                  }
                  export default Anpp