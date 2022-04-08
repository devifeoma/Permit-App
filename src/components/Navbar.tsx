import React from "react";

function Navbar() {
    return (
        <nav className="side__bar" id="side__bar">
        <div className="user__profile"> 
            <div className="user__avatar">
                <img src="assets/img/user.png" alt="user"/>
            </div>

            <div className="avatar__bio">
                <h1>Judith Ifeoma Nwokike</h1>
                <p>
                    Front End Developer
                </p>
            </div>

            
            <div className="side__bar__menu"> 
                <ul>
                    <li className="social__icon" >
                        <a href="#"><img src="assets/img/linkedin-square.png"/></a>
                    </li>
                    <li className="social__icon">
                        <a href="#"><img src="assets/img/twitter-square.png"/></a>
                    </li>
                    <li className="social__icon">
                        <a href="#"><img src="assets/img/facebook-sqaure.png"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;