// import logo from './logo.svg';
//    import './App.css';
//    import Footer from './Footer';
//    import Header from './Props1'
   
//      function props() {
//       let headerInfo={
//         email:'kishansingh9006866314 ',
//         phone:'9006866314'
//       };
//      return(
//        <div className="main">
//               <Header  headerInfo={headerInfo} cname="Ram" clay="Hello Radhe"/>
             
//           </div>
//      );
//    }
//    export default props;


// USING CHILDREN PROPS

// import logo from './logo.svg';
//    import './App.css';
  //  import Footer from './Footer';
  //  import Header from './Props1'
   
  //    function props() {
  //     let headerInfo={
  //       email:'kishansingh9006866314 ',
  //       phone:'9006866314'
  //     };
  //    return(
  //      <div className="main">
  //             <Header  headerInfo={headerInfo} cname="Ram" clay="Hello Radhe">
  //            <h1>I am the back</h1>  </Header>
  //         </div>
  //    );
  //  }
  //  export default props;

// How to send objects to child components through props

  import logo from './logo.svg';
     import './App.css';
     import Footer from './Footer';
     import Header from './Props1'
     import Vijay from './Vijay';
     
       function Props() {
        let headerInfo={
          email:'kishansingh9006866314 ',
          phone:'9006866314'
        };
       return(
         <div className="main">
                <Header  headerInfo={headerInfo} cname="Ram" >
               <h1>I am the back</h1>  </Header>
               <Vijay cname="Ram"/>

               <Container fluid></Container>
               <Container>
                <Row>
             <ProductItems/>
                </Row>
               </Container>
            </div>
       );
     }
     export default Props;
    //  function ProductItems(){
    //   return(
    //     <>
    //     Child
    //     </>) }
    function ProductItems(){
      return(
        <Col lg="3" md="6"> Hello</Col>
      )
    }


    

 
