import React from "react";

import About from "./components/About";
import "./App.css"
import Footer from "./components/Footer";
=======
import NavBar from "./components/NavBar"
import Home from "./components/Home"

import "./App.css"
import "./category.css"


function App() {
  return (
    <div>

 
   <About />
    <Footer />
=======
      <NavBar />

      <Home />

=======
      <Category />


    </div>
  );
}

export default App;