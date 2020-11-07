import React from "react";
import logo from "../images/normal-illustration.jpg"
import kidImage from "../images/kid-image";

export default function Navigationbar(){
    return (
        // <nav className="navbar-head navbar navbar-expand-lg navbar-light bg-light">
        // <a className="navbar-brand" href="#">
        //     <img src={logo} height="200"/>
        // </a>
        // <form className="form-inline my-2 my-lg-0">
        // <input className="form-control mr-sm-2" type="search" placeholder="Search for ... " aria-label="Search" />
        // </form>
        // <img className="profile-image" src={kidImage} height="200"/>
        // <p>Leonatta Llyod</p>
        // </nav>

        
        <nav class="navbar-head navbar navbar-light bg-light col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">  
        <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
        </a>
        <form className="form-inline my-2 my-lg-0">
            <input className="col-sm-2 col-md-2 col-xl-4 mr-sm-2" type="search" placeholder="Search for ... " aria-label="Search" />
        </form>
        <img className="profile-image" src={kidImage} height="200"/>
        <p>Leonatta Llyod</p>
        </nav>
    );
}