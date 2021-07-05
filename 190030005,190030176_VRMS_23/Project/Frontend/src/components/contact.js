import React from 'react';
import "./css/home.css";
import "./css/adminLogin.css";
import { NavLink } from "react-router-dom";
import banner from "./images/banner.PNG";
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Contact extends React.Component {
    render(){
        return(
            <div>
                <nav>
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
                <br></br>
                <br></br>
                <div>
                    <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Contact Number
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="number" placeholder="9999999999" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit"><NavLink to="/">Submit</NavLink></Button>
                    </Form>
                    <footer>
                            <h4>Let's Keep in Touch</h4>
                            <p>
                                7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008
                            </p>
                            <div className="copy-rights">
                                © Copyright 2017 HomeXRental India Private Ltd. All rights reserved.
                            </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Contact;