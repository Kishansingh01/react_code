// function Header(){
//     return(
//         <div>
//         <h1>Welcome to Header Section</h1>
//         <h4>I am kishan </h4>
//          <div>hello</div>
//          <div>hello1</div>
//          </div>
//     )
// }
//  export {Header};

 //  Next method

 function Header123(props){ 
   let {headerInfo,cname,clay,children}=props;
   console.log(headerInfo,cname,clay)
    // or
    // console.log(props.headerInfo) 
    //  console.log(props.headerInfo.email)
    //  console.log(props.headerInfo.phone)
    // console.log(props);
    // props
        return(
            <div>
              {children}
            <h1>Welcome to Header Section   {headerInfo.email} {cname} {clay}</h1>
            <h4>I am kishan </h4>
             <div>hello</div>
             <div>hello1</div> 
             </div>
        )
    }
     export default Header123;
   
    
    



