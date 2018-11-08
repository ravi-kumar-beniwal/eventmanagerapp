import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Jumbotron from './Jumbotron.jsx'
import Footer from './Footer.jsx'
import 'antd/dist/antd.css';
import moment from 'moment';
import { Button } from 'antd';
//import { Actions } from "react-native-router-flux";
import { Link } from 'react-router-dom'
import { Calendar, Alert } from 'antd';
import { NavLink } from 'react-router-dom'
//import AnchorLink from 'antd/lib/anchor/AnchorLink';
export default class Event extends Component {


  state = {
    value: moment('2017-01-24'),
  }

  onSelect = (e) => {
    this.setState({
      value: moment(e._d)
    },()=>{
      var datetime = new Date(e._d);
      var dd = datetime.getDate();
      var mm = datetime.getMonth()+1; //January is 0!

      var yyyy = datetime.getFullYear();
      if(dd<10){
          dd='0'+dd;
      } 
      if(mm<10){
          mm='0'+mm;
      } 
      var newDate = mm+'-'+dd+'-'+yyyy;
      this.props.history.push(`/EventPage/${newDate}`)
    })
  }


  onPanelChange = (value) => {
    this.setState({ value });
  }




  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <div>
          <Navbar />
          <Jumbotron title="WELCOME TO EVENT MANAGEMENT" subtitle="TO WRITE EVENT CLICK ON THE DATE  " />
        </div>

        <div className="container">

          <li className="nav-item">
            <Link className="nav-link" to="./NormalLoginForm">Login</Link>
          </li>
          <Alert message={`You selected date: ${value && value.format('YYYY-MM-DD')}`} />
          <NavLink to='/Login'>
            <Button onClick={this.onSelect}>CLICK</Button>
          </NavLink>

          <Calendar value={value} onSelect={(e) => {
            console.log(e._d);
            
            this.onSelect(e)
          }} onPanelChange={this.onPanelChange} />

        </div>


      </div>


    );
  }
}
