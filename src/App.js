import React, {useState, useEffect} from "react";
// import NavBar from "./components/NavBar"
// import Home from "./components/Home"
// import About from "./components/About"
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

  // const addNewCategory = (category) => {
  //   setCategories([...categories, category])
  // }

  return (
    <div>
    {/* <NavBar />
    <Home />
    <About /> */}
    <Newlisting 
    categories={categories} 
    jobListings={jobListings} 
    setJobListings={setJobListings}/>
    </div>
  );
}

export default App;
