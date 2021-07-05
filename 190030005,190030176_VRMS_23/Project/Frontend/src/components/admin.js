import React from 'react';
import "./css/home.css";
import "./css/adminLogin.css";
import { NavLink } from "react-router-dom";
import banner from "./images/banner.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
class Admin extends React.Component {
    constructor(props) {
        super();
        this.onChangeAdminEmail = this.onChangeAdminEmail.bind(this);
        this.onChangeAdminPassword = this.onChangeAdminPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          adminEmail: "",
          adminPassword: "",
          msg: "",
        };
      }
    
      onChangeAdminEmail(e) {
        this.setState({ adminEmail: e.target.value });
      }
      onChangeAdminPassword(e) {
        this.setState({ adminPassword: e.target.value });
      }
      onSubmit(e) {
        e.preventDefault();
        console.log("Login Successfull");
        console.log(`ADMIN EMAIL ID : ${this.state.adminEmail}`);
        console.log(`ADMIN PASSWORD : ${this.state.adminPassword}`);
        if (
          this.state.adminEmail === "admin@gmail.com" &&
          this.state.adminPassword === "admin1234"
        ) {
          this.setState({ msg: "WELCOME ADMIN" });
          sessionStorage.setItem("Key_Veriable", "admin@gmail.com");
          this.props.history.push("/adminafterlogin");
        } else {
          this.setState({ msg: "INVALID UID OR PASSWORD" });
        }
        this.setState({ adminEmail: "", adminPassword: "" });
      }
    render(){
        return(
            <div>
                <nav className="nav">
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
            <div className="container">
            <div className="signin-container">
                <h1 style={{color:'green'}}>Welcome Back</h1>
                <h4 className="msg">{this.state.msg}</h4>
                <form onSubmit={this.onSubmit}>
                <div className="box">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                type="text"
                name="adminEmail"
                id="Email"
                placeholder="Email"
                value={this.state.adminEmail}
                onChange={this.onChangeAdminEmail}
                />
                </div>
                <div className="box">
                <FontAwesomeIcon icon={faKey} />
                <input
                type="password"
                name="adminPassword"
                id="Password"
                placeholder="Password"
                value={this.state.adminPassword}
                onChange={this.onChangeAdminPassword}
                />
                </div>
                <button className="btn-signin">Log in</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default Admin;