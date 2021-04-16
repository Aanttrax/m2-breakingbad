import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";

function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */
const [quote, setquote] = useState([]);

useEffect (()=> {
  fetch("https://www.breakingbadapi.com/api/quote/random")
  .then (response => response.json())
  .then((response)=> {
  
    setquote(response[0])
  })
  

},[]);


return (
  <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      <hr></hr>
      <p>{quote.quote}</p>
      
      <h3>{quote.author}</h3>
    </div>
  );
}

export default Home;
