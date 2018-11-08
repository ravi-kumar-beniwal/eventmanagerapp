import React, { Component } from 'react';

import  {Link } from 'react-router-dom'
//import './navbarcss';
export default class Navbar extends React.Component{
    render()
    {
        return(
            <div className="navb">
            <nav className="navbar navbar-expand-md" background-color="#e3f2fd">
            <div className="container">
             <Link className="navbar-brand" to="/">Ravi Beniwal</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
                </button>
               
              <div className="collapse navbar-collapse" id="navbarCollapse">
                   <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./Event">Event Handle</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./WrappedNormalLoginForm">Login</Link>
          </li>
        </ul>
             </div>
             </div>
        </nav>
         </div>
        );

    }
}