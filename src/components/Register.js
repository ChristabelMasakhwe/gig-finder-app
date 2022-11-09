import React from 'react'
import Logo from'../assets/Gig-finder (1).png';

const Register = () => {
  return (
    <section>

        <div className='register'>
            <div className="col-1">
                <h2>New User</h2>
                <span>Welcome to Gig-Finder!</span>

                <form id="form" className="flex flex-col">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Location"/>

                    <button className="btn">Sign Up</button>
                </form>
            </div>
            {/* <div className="col-2">
                <img src={Logo} alt=""/>
            </div> */}
        </div>
    </section>
    
  )
}

export default Register
