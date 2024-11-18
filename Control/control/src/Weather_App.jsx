// There is some error is coming in my code so below i have used chatgpt code to make it right ,So go through it.
// import React,{useEffect, useState} from 'react'
// import './Weather_App.css'

// export default function Weather_App() {
//   let[city,setCity]=useState('')
//   let [wDetails,setWdetails]=useState()// Undefined () <- Its means
//   let [isLoading,setIsloading]=useState(false)

//   let getData=(event)=>{
//   setIsloading(true)
//    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
//    .then((res)=>res.json())
//    .then((finalRes)=>{
//     if(finalRes.cod === "404"){
//     setWdetails(undefined)
//   }   
//   else{
//     setWdetails(finalRes)
//   }
//   setIsloading(false)
//    })
//     event.preventDefault()
//     setCity(' ')
//   }
  
//   console.log(setWdetails);
//   return (
   
//     <div className="Simple"> 

//       <div className="app">
//         <h1>Simple Weather App</h1>

//         <form onSubmit={getData}>
//           <input  type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City Name" className= ""/>
//           <button  type="submit" className="btn">Submit</button>
//         </form>

//         <div className="Whole">

//           <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' className={`gif ${isLoading ? '' : 'hidden'}`} />

//           {wDetails!=undefined
//           ?
//           <>
//           <h3>{wDetails.name} <span className="in">{wDetails.sys.country}</span></h3>   
//           <h2>
//             {wDetails.main.temp}
//           </h2>
//           <img src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}/>
//           <p>{wDetails.weather[0].description}</p>
//           </>
//           :
//           "No Data"
//            }

//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './Weather_App.css';

export default function Weather_App() {
  let [city, setCity] = useState('');
  let [wDetails, setWdetails] = useState(undefined); // Undefined initially
  let [isLoading, setIsloading] = useState(false);

  let getData = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    setIsloading(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod === "404") {
          setWdetails(undefined);
        } else {
          setWdetails(finalRes);
        }
        setIsloading(false);
      })
      .catch((err) => {
        console.log("Error fetching data: ", err);
        setIsloading(false);
      });

    setCity(''); // Clear the input field after submission
  };

  return (
    <div className="Simple">
      <div className="app">
        <h1>Simple Weather App</h1>

        <form onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
            className=""
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        <div className="Whole">
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif'
            className={`gif ${isLoading ? '' : 'hidden'}`}
            alt="Loading..."
          />

          {wDetails !== undefined ? (
            <>
              <h3>
                {wDetails.name}{' '}
                {wDetails.sys && <span className="in">{wDetails.sys.country}</span>}
              </h3>
              <h2>{wDetails.main && wDetails.main.temp}°C</h2>
              {wDetails.weather && wDetails.weather[0] && (
                <>
                  <img
                    src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                    alt={wDetails.weather[0].description}
                  />
                  <p>{wDetails.weather[0].description}</p>
                </>
              )}
            </>
          ) : (
            !isLoading && <p>No Data</p>
          )}
        </div>
      </div>
    </div>
  );
}







