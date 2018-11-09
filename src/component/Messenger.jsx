import React, { Component } from 'react'
import  {Link } from 'react-router-dom'
import './Messenger.css'
export default class Messenger extends Component {
  render() {
    return (
 
        <div className="container ">
        <div className="nav-scroller bg-white box-shadow">
            <nav className="nav nav-underline ">
            
                <Link className="nav-link active" to="Dashboard">
                   Dashboard
                </Link>
                

                <Link className="nav-link" to="/Friends">
                Friends
                <span className="badge badge-pill bg-light align-text-bottom">27</span>
                </Link>
            
                
             

                
                <Link className="nav-link" to="/Suggestion">Suggestion</Link>
              

               
                <Link className="nav-link" to="Linkdin">Linkedin</Link>
                

              
                <Link className="nav-link" to="Facebbok">Facebook</Link>
              

                
                <Link className="nav-link" to="twitter">twitter</Link>
               
           
        </nav>
        </div>
        
                 <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
     
            <div className="lh-100">
          <h6 className="mb-0 text-white lh-100">Bootstrap</h6>
             <small>Since 2011</small>
                </div>
                </div>
       
            

        </div>
    )
  }
}
