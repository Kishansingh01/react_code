            //    ModalDiv 

            import './App.css';  
           // import './Password.css';
            import btnModule from "./Botton.module.css"
            import {useState} from 'react';
        
            function Login_Modal(){
              let [status,setStatus]=useState(false);
              let[pstatus,setPstatus]=useState(false);
              const [count, setCount] = useState(0);
              let[modalstatus,setModalstatus]=useState(false)
              return (
                <div className="text-red-700 text-[24px] App">

                   <button className="en" onClick={()=>setModalstatus(true)}>Enquire Now</button>

                       <div onclick={()=>setModalstatus(false)} className={`modalOverLay ${modalstatus ?'modalShow':''}`}></div>
                       <div className={`ModalDiv ${modalstatus ?'showModalDiv':''}`}>
                        <h3>Enquiry Now <span onClick={()=>setModalstatus(false)}>&times;</span></h3>
                    </div>
         
    
                 <input className="bg-slate-400 outline-none border border-black" type={pstatus ? 'text' : 'password'}/>
                
                 {/* <button 
                     className="ml-8" 
                    onClick={()=>setPstatus(!pstatus)}>
                    {pstatus ? 'Hide':'Show'}
                 </button>
                 <br/>
                  {/* <button className={btnModule.error}>Error</button> 
                   <button className={btnModule.warning}>Demo</button> */}
                  {/* <button onClick={()=>setStatus(!status)}>
                    
                      {(status)?'Hide':'Show'}
                    </button>  */}
                    {
                      (status) ?   <p className='para'>Welcome to WS</p> :  ''
                           }

                        <div className="flex gap-12">
                          <button onClick={() => setCount(count - 1)}>Decrement</button>
                          <span>{count}</span>
                          <button onClick={() => setCount(count + 1)}>Increment</button>
                        </div> 
                       </div>

                      
                     );
                   }
                   export default Login_Modal