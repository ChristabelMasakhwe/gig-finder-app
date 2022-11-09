
import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
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
      <Category />

=======
    <NavBar />
    <Home />
    </div>
  );
}

export default App;