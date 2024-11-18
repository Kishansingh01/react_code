import React,{useEffect, useState} from 'react'
function UseEffect() {
    let[counter,setCounter]=useState(1)
    let data=(()=>{
        setCounter(counter+5)
    })
    useEffect(() => {
        console.log("Welcome to WS Kishan");
     }, [counter]);

  return (
    <div>
        <button onClick={data}>Button</button>
        
        <p>{counter}</p>
    </div>
  )
}
export default UseEffect


// import React, { useEffect, useState } from 'react';
// import './Weather_App.css';

// export default function UseEffect() {
//   let [city, setCity] = useState('');
//   let [wDetails, setWdetails] = useState(undefined); // Initialize undefined
//   let [isLoading, setIsloading] = useState(false);
//   let [counter, setCounter] = useState(1);

//   // Function to fetch weather data
//   let getData = (event) => {
//     event.preventDefault(); // Prevent page refresh on form submission
//     setIsloading(true);

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
//       .then((res) => res.json())
//       .then((finalRes) => {
//         if (finalRes.cod === "404") {
//           setWdetails(undefined); // Set wDetails to undefined if city not found
//         } else {
//           setWdetails(finalRes); // Set wDetails with fetched data
//         }
//         setIsloading(false); // Stop loading
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setIsloading(false); // Stop loading on error
//       });

//     setCity(''); // Clear input field after form submission
//   };

//   // Counter increment logic
//   let changeCounter = () => {
//      setCounter(counter + 1);
//   };

//   // Log side-effect using useEffect hook
//   useEffect(() => {
//     console.log("Welcome to WS Kishan");
//   }, [counter]); // Empty array as second argument, runs once on component mount

//   // Render the component
//   return (
//     <div className="Simple">
//       {/* Display the counter */}
//       <div>
//         {counter}
//         <button onClick={changeCounter}>Count</button>
//       </div>

//       <div className="app">
//         <h1>Simple Weather App</h1>

//         <form onSubmit={getData}>
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="City Name"
//             className=""
//           />
//           <button type="submit" className="btn">Submit</button>
//         </form>

//         <div className="Whole">
//           <img
//             src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif'
//             className={`gif ${isLoading ? '' : 'hidden'}`}
//             alt="Loading..."
//           />

//           {wDetails !== undefined ? (
//             <>
//               <h3>
//                 {wDetails.name}{' '}
//                 {/* Check if wDetails.sys exists before accessing country */}
//                 {wDetails.sys && <span className="in">{wDetails.sys.country}</span>}
//               </h3>
//               {/* Check if wDetails.main exists before accessing temp */}
//               <h2>{wDetails.main && wDetails.main.temp}°C</h2>
//               {/* Check if wDetails.weather exists before rendering weather details */}
//               {wDetails.weather && wDetails.weather[0] && (
//                 <>
//                   <img
//                     src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
//                     alt={wDetails.weather[0].description}
//                   />
//                   <p>{wDetails.weather[0].description}</p>
//                 </>
//               )}
//             </>
//           ) : (
//             !isLoading && <p>No Data</p> // Display "No Data" only when not loading
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }










