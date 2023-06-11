import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "./TaskinatorWOL.png";
import { GiRocketThruster } from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib";


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" >
                        < img src= {logo}  alt= "Taskin8r logo" onClick={closeMobileMenu}/>
                           
                                
                           
                            
                        </Link>
                       
                        <ul className={click ? "nav-menu active" : "nav-menu"}> </ul>
                        <ul className="nav-item">
                            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")
                            }
                                onClick={closeMobileMenu}
                            >
                                Home</NavLink>
                        </ul>
                        <ul className="nav-item">
                            <NavLink to="/About" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")
                            }
                                onClick={closeMobileMenu}
                            >
                                About</NavLink>
                        </ul>
                        <ul className="nav-item">
                            <NavLink to="/CompanyList" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")
                            }
                                onClick={closeMobileMenu}
                            >
                                Company List</NavLink>
                        </ul>
                        <ul className="nav-item">
                            <NavLink to="/Signin" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")
                            }
                                onClick={closeMobileMenu}
                            >
                                Signin</NavLink>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>


    );
}

export default Navbar;