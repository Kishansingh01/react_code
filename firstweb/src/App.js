               // How to import CSS and Images in react

// import './App.css';
// import Header from './Header';
// import weblogo from "./SvgImage.svg"
// import johnDon from "./John_Doe_Images.webp"

// function App() {  
//   return (
//     <div className="App">
//       <img src="/logo192.png"/>
//       {/* <img width={200} src='C:\Users\desktop\Downloads\React\firstweb\src\SvgImage.svg'/> */}
//       {/* <img  width="10%"src={weblogo}/> */}
//       <img src={johnDon}/>  
//       <img src="src/John_Doe_Images.webp"/>
//      <Header/>
//      <h1 className='font-bold text-6xl text-red-600'>Welcome to WS</h1>
//     </div>
//   );
// }
// export default App; 


             //         Event Handling
         
// import './App.css';
// import johnDon from "./John_Doe_Images.webp"
// import Header from './Header';
// function App() {  

//   let displayData=()=>{
//     alert("Welcome to WS")
//    }
//    let addData=(a,b,c)=>{
//     console.log(a+b+c)
       // alert("a+b+c"+(a+b+c))
//    }
//   return (
//     <div className="App">

//       <button className='bg-red-600 text-slate-50 m-5 p-6 rounded-lg' onClick={()=>addData(20,40,60)}>Click</button>

//       <buttom className='bg-amber-300 text-slate-50 m-5 p-6 rounded-lg' onClick={displayData}>save me</buttom>

//       <img src={johnDon}/>  
//      <Header/>
//      <h1 className='font-bold text-6xl text-red-600'>Welcome to WS</h1>
//     </div>
//   );
// }
// export default App;

           
           //   Hooks(Usestate In Hooks)
    
          //  import './App.css';
          //  import johnDon from "./John_Doe_Images.webp"
          //  import Header from './Header';
          //  import {useState} from 'react';
          //  function App() {  
          //   let [count,setCount]=useState(1)
          //   let displayData=()=>{
          //     setCount(count+1)
          //   }
          //     let addData=(a,b,c)=>{
          //      console.log(a+b+c)
          //      alert("a+b+c="+(a+b+c))
          //     }

          //    return (
          //      <div className="App">
          //       {count}
           
          //        <button className='bg-red-600 text-slate-50 m-5 p-6 rounded-lg' onClick={()=>addData(20,40,60)}>Click</button>
           
          //        <button className='bg-amber-300 text-slate-50 m-5 p-6 rounded-lg' onClick={displayData}>save me</button>
           
          //        <img src={johnDon}/>  
          //       <Header/>
          //       <h1 className='font-bold text-6xl text-red-600'>Welcome to WS</h1>
          //      </div>
          //    );
          //  }
          //  export default App;

    //  For n defined

          // import './App.css';
          // import johnDon from "./John_Doe_Images.webp"
          // import Header from './Header';
          // function App() {  

          //   let n=10;
          //   let displayData=()=>{
          //    n=n+1;
          //    console.log(n)}
           
          //    let addData=(a,b,c)=>{
          //     console.log(a+b+c)
          //     alert("a+b+c="+(a+b+c))
          //    }

          //   return (
          //     <div className="App">
          //      {n}
          
          //       <button className='bg-red-600 text-slate-50 m-5 p-6 rounded-lg' onClick={()=>addData(20,40,60)}>Click</button>
          
          //       <button className='bg-amber-300 text-slate-50 m-5 p-6 rounded-lg' onClick={displayData}>save me</button>
          
          //       <img src={johnDon}/>  
          //      <Header/>
          //      <h1 className='font-bold text-6xl text-red-600'>Welcome to WS</h1>
          //     </div>
          //   );
          // }
          // export default App


        //    Conditional in React.js

    //  import './App.css';
    //        import johnDon from "./John_Doe_Images.webp"
    //        import Header from './Header';
    //        import {useState} from 'react';

    //        function App() {  
    //         let temp='';
    //         let [count,setCount]=useState(1)
    //         let [pshow,setPshow]=useState(false)

    //         if(pshow){ //If the pshow is true then it will enter inside.
    //           temp=<>
    //     <button className='bg-[red] p-4 'onClick={()=>setPshow(!pshow)}>Hide</button>
    //           <p>Welcome to WS</p> 
    //               </>
    
    //         }
    //         else{ //If pshow is false then come here.
    //           temp=<button className='bg-[red] p-4 'onClick={()=>setPshow(!pshow) }>Show</button>

    //         }

    //         let displayData=()=>{
    //            setCount(count+1)
    //         }
    //           let addData=(a,b,c)=>{
    //            console.log(a+b+c)
    //            alert("a+b+c="+(a+b+c))
    //           }

    //          return ( 
    //            <div className="App">
    //             {temp}
    //             <div> {count}</div>
    //              <button className='bg-red-600 text-slate-50 m-5 p-6 rounded-lg' onClick={()=>addData(20,40,60)}>Click</button>
           
    //              <button className='bg-amber-300 text-slate-50 m-5 p-6 rounded-lg' onClick={displayData}>save me</button>
           
    //              <img src={johnDon}/>  
    //             <Header/>
    //             <h1 className='font-bold text-6xl text-red-600'>Welcome to WS</h1>
    //            </div>
    //          );
    //        }
    //        export default App;
  
     
    //  COMPONENT WISE CONDITIONAL STATEMENT 

    // import './App.css';
    //        import johnDon from "./John_Doe_Images.webp"
    //        import Header from './Header';
    //        import {useState} from 'react';

    //        function App() {  
    //         let temp='';
    //         let [count,setCount]=useState(1)
    //         let [pshow,setPshow]=useState(false)

    //         if(pshow){ //If the pshow is true then it will enter inside.
    //           temp=<Card/>
    //         }
    //         else{ //If pshow is false then come here.
    //           temp=''//<button className='bg-[red] p-4 'onClick={()=>setPshow(!pshow) }>Show</button>
    //         }
    //         let displayData=()=>{
    //            setCount(count+1)
    //         }
    //          return ( 
    //            <div className="App">
    //             {temp}
    //             <div> {count}</div>
           
    //              <button className='bg-amber-300 text-slate-50 m-5 p-6 rounded-lg' onClick={displayData}>save me</button>
           
    //                <img src={johnDon}/>  
    //             <Header/>
    //             <h1 className='font-bold text-6xl text-red-600'>Welcome to WS</h1>
    //            </div>
    //          );
    //        }
    //        export default App;
    //         let Card=()=>{
    //           return(
    //             <h1>Welcome to WS</h1>
    //           )
    //         }
  


         //   TERNARY OPERATORS

      // import './App.css';
      // import {useState} from 'react';
      // function App(){
      //   let [status,setStatus]=useState(false);

      //   return (
      //     <div className="App">
      //         <button onClick={()=>setStatus(!status)}>
      //           {(status)?'Hide':'Show'}
      //         </button>
      //         {
      //           (status) ?   <p className='para'>Welcome to WS</p> :  ''
      //         }
      //     </div>
      //   );
      // }
      // export default App
         
    
         //   .Module style

       import './App.css';
       import btnModule from "./Botton.module.css"
      import {useState} from 'react';
      function App(){
        let [status,setStatus]=useState(false);

        return (
          <div className="App">
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
      export default App