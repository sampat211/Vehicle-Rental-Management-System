import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "./images/banner.PNG";
import { connect } from 'react-redux';
import Flow from '../plugins/flow';
import '../assets/styles/booking.css';
import CreateRequest from '../plugins/createRequest';
import ChooseCar from '../plugins/chooseCar';
import Extras from '../plugins/extras';
import Book from '../plugins/carBooking';
import '../assets/styles/Header.css';
import "./css/home.css";
import "./css/adminLogin.css";

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <div className="logo">
                            <img src={banner} alt="logo" height="100px" width="50px"/>
                        </div>
                        <li>
                            <NavLink to="/offers" exact activeclassname="active" className="listdesign">Offers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/subscription" exact activeclassname="active" className="listdesign">Subscription</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeclassname="active" className="listdesign">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" exact activeclassname="active" className="listdesign">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName="active" className="listdesign">Log Out</NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            <div className="bookingFlow">
                <ul>
                    <Flow 
                        flowNumber={1} 
                        isCompleted={this.props.progress > 1 ? true : false} 
                        title={'Create Request'} 
                        isActive={this.props.progress ===1 ? true : false} 
                    />
                    <Flow 
                        flowNumber={2} 
                        isCompleted={this.props.progress > 2 ? true : false} 
                        title={'Choose a Car'} 
                        isActive={this.props.progress ===2 ? true : false}
                    />
                    <Flow 
                        flowNumber={3} 
                        isCompleted={this.props.progress > 3 ? true : false} 
                        title={'Choose Extras'} 
                        isActive={this.props.progress ===3 ? true : false} 
                    />
                    <Flow 
                        flowNumber={4} 
                        isCompleted={this.props.progress > 4 ? true : false} 
                        title={'Review & Book'} 
                        isActive={this.props.progress ===4 ? true : false} 
                    />
                </ul>
            </div>
            <div>
                {
                    this.props.progress ===1
                    &&
                    <CreateRequest />
                }
                {
                    this.props.progress ===2
                    &&
                    <ChooseCar />
                }
                {
                    this.props.progress ===3
                    &&
                    <Extras />
                }
                {
                    this.props.progress ===4
                    &&
                    <Book />
                }
            </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps)(Dashboard);