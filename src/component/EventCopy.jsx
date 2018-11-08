import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Jumbotron from './Jumbotron.jsx'
import Footer from './Footer.jsx'
import 'antd/dist/antd.css';
import { Calendar, Alert } from 'antd';
import moment from 'moment';


import getListData from './Calender.jsx'
//import { Calendar } from 'antd';
export default class Event extends Component {

    state = {
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
      }
    
      onSelect = (value) => {
        this.setState({
          value,
          selectedValue: value,
        });
      }
    
      onPanelChange = (value) => {
        this.setState({ value });
      }
    
    
      
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
      <Navbar/>
      <Jumbotron title="WELCOME TO EVENT MANAGEMENT" subtitle="TO WRITE EVENT CLICK ON THE DATE  "/>
      
      <div className="container">

        <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
     
      </div>
     

      
 
      </div>
    )
  }
}
