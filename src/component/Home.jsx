import React, { Component } from 'react'
import  {Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Jumbotron from './Jumbotron.jsx'


//import { Menu, Dropdown, Icon } from 'antd';
//import 'antd/dist/antd.css';

//const menu = (
 // <Menu>
   // <Menu.Item>
    //  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">joban</a>
   // </Menu.Item>
   // <Menu.Item>
    //  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">ravi</a>
    //</Menu.Item>
    //<Menu.Item>
    //  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">manjot</a>
   // </Menu.Item>
 // </Menu>
//);


const qs = require('query-string');

export default class Home extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Jumbotron title="welcome" subtitle="this is reactjs website.you are very very welcome here"/>
        <div className="container">
        <h2>Welcome</h2>
          <p className="para">
            This is a home page of id {this.props.match.id} and my name is ravi it is my first recat app. its really exciting to work on the 
            the the reactjs.its really very intresting. i like it.
            its fast .we can make big application using reactjs by dividing code into simple step.
          </p>
          <p>
            this is a home page of id 4 and my name is ravi it is my first recat app. its really exciting to work on the 
            the the reactjs.its really very intresting. i like it.
            its fast .we can make big application using reactjs by dividing code into simple step.
          </p>
               
        </div>

        <Footer/>
        
      </div>
    );
  }
}
