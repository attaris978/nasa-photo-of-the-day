import React, {useState,useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Date from "./components/Date/Date";
import Photo from "./components/Photo/Photo";
import Explanation from "./components/Explanation/Explanation";
import NASAUrl from "./components/constants";
function App() {
  const [data,setData] = useState();
  // const [error,setError] = useState();
  useEffect( () => {
    const fetchData = async () => {
      let result = await fetch(NASAUrl);
      let jSon = await result.json();
      // console.log(jSon);
      
      result.ok ? setData(jSon) : console.error(result.status);
    };
    fetchData().catch(err => console.log(err));
}, []);

 return ( !data || (
    <div className="App">
      <Header />
      <Date date={data.date} />
      <Photo title={data.title } hdurl={data.hdurl} copyright={data.copyright}/>
      <Explanation explanation={data.explanation} />
    </div>
  ));
}

export default App;
