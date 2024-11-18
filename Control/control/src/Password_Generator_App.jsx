import React, { useState } from "react";
import "./Password_Generator_App.css";
import { LC, UC, NC, SC } from "./data/PassChar";

export default function Password_Generator_App() {

  let p="Wscubetech";
  let n=p.charAt(Math.floor(Math.random()*p.length))
  console.log(n)

  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlen,setPasswordLen]=useState(10)
  let [fPass,setPass]=useState('')

  let createPassword = () => {
    let finalPass=''
    let charSet = ''
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }        
      setPass(finalPass)
    } else {
      alert("Please select CheckBox!...");
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" value={fPass} readOnly />
          <button className="copy-btn" onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password length</label>
          <input type="number" min={10} max={20} value={passwordlen}
           onChange={(event)=>setPasswordLen(event.target.value)} />
        </div>

        <div className="passLength">
          <label>Include uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} max={20}/>
        </div>

        <div className="passLength">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
            max={20}
          />
        </div>

        <div className="passLength">
          <label>Include numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
            max={20}
          />
        </div>

        <div className="passLength">
          <label>Include symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
            max={20}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}
