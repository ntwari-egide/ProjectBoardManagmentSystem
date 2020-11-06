import React from "react";
import logo from "../images/normal-illustration.jpg"
import kidImage from "../images/kid-image";

export default function Navigationbar(){
    return (
        <nav className="navbar-head navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} height="200"/>
            </a>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search for ... " aria-label="Search" />
            </form>
            <img className="profile-image" src={kidImage} height="200"/>
            <p>Leonatta Llyod</p>
        </nav>
    );
}