import React, {useState, useEffect} from "react";
import Newlisting from "./components/Newlisting"
import "./App.css"

function App() {
  const [categories, setCategories] = useState([]);
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then((r) => r.json())
    .then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/job_listings")
    .then((r) => r.json())
    .then((jobListings) => {
      setJobListings(jobListings);   
    });
  }, []);


  return (
    <div>
   
    <Newlisting 
    categories={categories} 
    jobListings={jobListings} 
    setJobListings={setJobListings}/>
    </div>
  );
}

export default App;
