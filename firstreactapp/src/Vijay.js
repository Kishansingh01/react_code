
//     // Reactive Bootstrape

// // import logo from './logo.svg';
// // import './Vijay.css';
// // import Header from './Header';
// // import Footer from './Footer';
// // import Container from 'react-bootstrap/Container';
// //  import Col from 'react-bootstrap/Col';

// //   function Vijay() {
// //   return(
// //     <div className="main"> 
    
// //            <Header/>
         
// //            <Container fluid>
          
// //            <Col className="col">RAHIM
// //             </Col> 
       
         
// //       </Container>
// //       <Footer/>
    
    
// //    <Card/>
// //    <Card/>
// //    <Card/>
// //    <Card/>
// //        <div/>
// //      <Footer/>
// //        </div>
// //   );
// // }
// // export default Vijay;
// // function Card(){
// //   return(
// //     <div className="cardItems" >Card Div</div>
// //   );
// // }



//    //  Another method we can do container and column in one line
//  //Ye components ke naam bane banaye de rha hai



//    import logo from './logo.svg';
//   

// import './Vijay.css';
// // import Header from './Header';
// import Footer from './Footer';
// import { Container, Col, Row, Button, Card } from 'react-bootstrap';
// import { blog } from './Data/blog';

// function Vijay({ cname }) {
//   return (
//     <div className="main">
//       {/* <Header email="ws@gmail.com" phone="9569324690" /> */}
//       <Container fluid>
//         <Container>
//           <Row>
//             <Col className="text-center">
//               <h1>Our Courses</h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col lg="3" md="6">
//               <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                   <Card.Title>Course 1</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg="3" md="6">
//               <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                   <Card.Title>Course 2</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg="3" md="6">
//               <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                   <Card.Title>Course 3</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg="3" md="6">
//               <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                   <Card.Title>Course 4</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//         <Row>
//           {blog.map((v, i) => (
//             <ProductItems pitems={v} key={i} />
//           ))}
//         </Row>
//       </Container>
//       <Footer />
//       <div>{cname}</div>
//     </div>
//   );
// }

// function ProductItems({ pitems }) {
//   return (
//     <Col lg="3" md="6" className="mb-4">
//       <Card>
//         <Card.Body>
//           <Card.Title>{pitems.title}</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }
// export default Vijay;


// import logo from './logo.svg';
//      import './App.css';
//      import Footer from './Footer';
//      import Header from './Props1'
//      import Vijay from './Vijay';
     
//        function Props() {
//         let headerInfo={
//           email:'kishansingh9006866314 ',
//           phone:'9006866314'
//         };
//        return(
//          <div className="main">
//                 <Header  headerInfo={headerInfo} cname="Ram" >
//                <h1>I am the back</h1>  </Header>
//                <Vijay cname="Ram"/>

//                <Container fluid></Container>
//                <Container>
//                 <Row>
//              <ProductItems/>
//                 </Row>
//                </Container>
//             </div>
//        );
//      }
//      export default Vijay;
//     //  function ProductItems(){
//     //   return(
//     //     <>
//     //     Child
//     //     </>) }
//     function ProductItems(){
//       return(
//         <Col lg="3" md="6"> Hello</Col>
//       )
//     }



// import logo from './logo.svg'; // Remove if not needed
// import './App.css'; // Remove if not needed
// import Footer from './Footer';
// import Header from './Props1';
// import Vijay from './Vijay';
// import { Container, Row, Col } from 'react-bootstrap';

// function Props() {
//   let headerInfo = {
//     email: 'kishansingh9006866314',
//     phone: '9006866314'
//   };

//   return (
//     <div className="main">
//       <Header headerInfo={headerInfo} cname="Ram">
//         <h1>I am the back</h1>
//       </Header>
//       <Vijay cname="Ram" />

//       <Container fluid></Container>
//       <Container>
//         <Row>
//           <ProductItems />
//         </Row>
//       </Container>
//       <Footer />
//     </div>
//   );
// }
// export default Props;

// function ProductItems() {
//   return (
//     <Col lg="3" md="6">Hello</Col>
//   );
// }



    //    Fontawesome icons.

import Footer from './Footer';
import Header from './Props1';
import Vijay from './Vijay';
import { Container, Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPhone,faSearch} from '@fortawesome/free-solid-svg-icons';

function Props() {
  let headerInfo = {
    email: 'kishansingh9006866314',
    phone: '9006866314'
  };
  return (
    <div className="main">
      <Header headerInfo={headerInfo} cname="Ram">
        <h1>I am the back</h1>
        <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        <FontAwesomeIcon icon={faPhone} className="text-danger"/>
        <FontAwesomeIcon icon={faSearch}/>
        {/* Up will show the whatsapp icons  */}
      </Header>
      <Vijay cname="Ram" />

      <Container fluid></Container>
      <Container>
        <Row>
          <ProductItems />
        </Row>
      </Container>
      <Footer />
    </div>
  );
} 
function ProductItems() {
  return (
    <Col lg="3" md="6">
      Hello
    </Col>
  );}
export default Props;
