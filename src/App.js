import React, {useState,useEffect} from "react";
import "./App.css";
const APIKey = "X7hhjc1HgiuvLkLaToKUINEpmr0MrKb9sZeIsDfU";
const NASAUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + APIKey;
console.log(NASAUrl);
function App() {
  const [data,setData] = useState();
  const [error,setError] = useState();

  useEffect( () => {
    fetch(NASAUrl)
    .then(result => {
      result.ok ? setData(result.json()) : console.log("Fetch error:" + result.status)
    })
    .catch(err => setError(error));
    console.log(data);
    },[]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
