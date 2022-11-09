import React from 'react'

import Alex from "../assets/Alex.png"

function Home() {
  return (
    <div className='home'>

      <div className="container">
        <div>
          <div id="heading">
            <h1>GIG-FINDER</h1>
          </div>
          <p>Whether you are looking for a new job
            or just trying to make some extra money,
            our platform will connect you with
            opportunities that suit your style and location.</p>
          <button>REGISTER</button>
        </div>
        <div id="image">
          <img src={Alex} alt="hero-section" />
        </div>
      </div>

    </div>
  )
}

export default Home;