import React from 'react';
import "./css/home.css";
import "./css/adminLogin.css";
import { NavLink } from "react-router-dom";
import banner from "./images/banner.PNG";

class Subscription extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <div className="logo">
                            <img src={banner} alt="logo" height="100px" width="50px"/>
                        </div>
                        <li>
                            <NavLink to="/" exact activeclassname="active" className="listdesign">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/offers" exact activeclassname="active" className="listdesign">Offers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/subscription" exact activeclassname="active" className="listdesign">Subscription</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" exact activeclassname="active" className="listdesign">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" exact activeclassname="active" className="listdesign">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" exact activeclassname="active" className="listdesign">Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeclassname="active" className="listdesign">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" exact activeclassname="active" className="listdesign">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="firstSection">
                    <div className="main-box">
                        <div className="firstHalf">
                            <div className="text-big2">
                              <input type="text" name="search" id="search" />
                              <button className="btn btn-small">Search</button>
                            </div>
                            <br></br>
                            <div className="firstHalf">
                                <p className="text-big">DRIVE IN A SANITISED HOMEXRENTAL CAR</p>
                                <p>Self Drive Car Rental</p>
                                <div className="text-small">
                                        Proactively envisioned multimedia based expertise and
                                    cross-media growth strategies. Seamlessly visualize quality
                                    intellectual capital without superior collaboration and
                                    idea-sharing.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                   <div className="footer-wrapper">
                     <h4>About Us</h4>
                     <ul class="Container" style={{justifyContent: "normal"}}>
                       <li>Zoomcar Team</li><span></span>
                       <li>Zoomcar Subscription</li><span></span>
                       <li>Zoomcar Blog</li><span></span>
                       <li>Careers @ Zoomcar</li><span></span>
                       <li>Location & Cars</li><span></span>
                       <li>Self Drive Cars</li><span></span>
                       <li>Invest via OurCrowd</li><span></span>
                     </ul>
                     <h4>Cities</h4>
                     <ul className="Container">
                       <li><span>Self Drive Cars in Bangalore</span></li>
                       <li><span>Self Drive Cars in Pune</span></li>
                       <li>Self Drive Cars in Delhi</li><span></span>
                       <li>Self Drive Cars in Chennai</li><span></span>
                       <li>Self Drive Cars in Hyderabad</li><span></span>
                       <li>Self Drive Cars in Chandigarh</li><span></span>
                       <li>Slef Drive Cars in Ahmedabad</li><span></span>
                       <li>Slef Drive Cars in Coimbatore</li><span></span>
                       <li>Slef Drive Cars in Indore</li><span></span>
                       <li>Self Drive Cars in Ludhiana</li><span></span>
                       <li>Self Drive Cars in Mysore</li><span></span>
                       <li>Slef Drive Cars in Nagpur</li><span></span>
                     </ul>
                     <h4>Airport Services</h4>
                     <ul className="Container">
                       <li>Car Rental From Bangalore Airport</li>
                       <li>Car Rental From Pune Airport</li>
                       <li>Car Rental From Delhi Airport</li>
                       <li>Car Rental From Chennai Airport</li>
                       <li>Car Rental From Hyderabad Airport</li>
                       <li>Car Rental From Chadigarh Airport</li>
                       <li>Car Rental From Ahmedabad Airport</li>
                       <li>Car Rental From Coimbatore Airport</li>
                       <li>Car Rental From Chandigarh Airport</li>
                       <li>Car Rental From Chennai Airport</li>
                       <li>Car Rental From Indore Airport</li>
                       <li>Car Rental From Vizag Airport</li>
                     </ul>
                   </div>
                </div>
            </div>
        );
    }
}

export default Subscription;