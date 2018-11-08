import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";
import { Table, Button } from "antd";

const database = firebase.database();

let data = [];
// const data = [{
//     key: '1',
//     eventName: 'ravi',
//     address: 'sirsa No. 1 Lake Park',
//     type:'basic',
//     eventDate:'22-10-2018'
//   }, {
//     key: '2',
//     eventName: 'beniwal',
//     address: 'haryana 1 Lake Park',
//     type:'important',
//     eventDate:'22-10-2018'
//   }, {
//     key: '3',
//     eventName: 'joban',
//     address: 'punjab 1 Lake Park',
//     type:'basic',
//     eventDate:'22-10-2018'
//   }, {
//     key: '4',
//     eventName: 'mandeep',
//     address: 'tangra No. 2 Lake Park',
//     type:'important',
//     eventDate:'22-10-2018'
//   }];

export default class EventPage extends Component {
  
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data:[]
  };

  componentWillMount(){
    database.ref('/events').orderByChild('eventDate').equalTo(this.props.match.params.date).on('value',(snapshot)=>{
      if(snapshot.exists()){
        this.setState({
          data:Object.values(snapshot.toJSON())
        })
      }
    })
  }
  

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
      
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "eventName"
      }
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "EventName",
        dataIndex: "eventName",
        key: "eventName",
        filters: [
          { text: "ravi", value: "Joe" },
          { text: "mandeep", value: "Jim" }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.eventName.includes(value),
        sorter: (a, b) => a.eventName.length - b.eventName.length,
        sortOrder: sortedInfo.columnKey === "eventName" && sortedInfo.order
      },
      {
        title: "Event Address",
        dataIndex: "eventAddress",
        key: "EventAddress",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.eventAddress || null,
        onFilter: (value, record) => record.eventAddress.includes(value),
        sorter: (a, b) => a.eventAddress.length - b.eventAddress.length,
        sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order
      },

       {
        title: " Event Date",
        dataIndex: "eventDate",
        key: "eventDate",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.eventDate || null,
        onFilter: (value, record) => record.eventDate.includes(value),
        sorter: (a, b) => a.eventDate.length - b.eventDate.length,
        sortOrder: sortedInfo.columnKey === "eventDate" && sortedInfo.order
      },

      {
        title: "Event Company",
        dataIndex: "eventCompany",
        
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.eventCompany || null,
        onFilter: (value, record) => record.eventCompany.includes(value),
        sorter: (a, b) => a.eventCompany.length - b.eventCompany.length,
        sortOrder: sortedInfo.columnKey === "eventCompany" && sortedInfo.order
      },
      {
        title: "Event Main Guest",
        dataIndex: "eventGuest",
        
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.eventGuest || null,
        onFilter: (value, record) => record.eventGuest.includes(value),
        sorter: (a, b) => a.eventGuest.length - b.eventGuest.length,
        sortOrder: sortedInfo.columnKey === "eventGuest" && sortedInfo.order
      },
      {
        title: "Event Number Of Seat ",
        dataIndex: "eventSeatNumbers",
        
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.eventSeatNumbers || null,
        onFilter: (value, record) => record.eventSeatNumbers.includes(value),
        sorter: (a, b) => a.eventSeatNumbers.length - b.eventSeatNumbers.length,
        sortOrder: sortedInfo.columnKey === "eventSeatNumbers" && sortedInfo.order
      },





    ];

    return (
      <div>
        <div>
          <Navbar />
          <Jumbotron
            title="WELCOME TO EVENT MANAGEMENT"
            subtitle="TO WRITE EVENT CLICK ON THE DATE  "
          />
        </div>
        <div className="container">
          <div className="table-operations">
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table
            columns={columns}
            dataSource={this.state.data}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <NavLink to={`/CreateEvent/${this.props.match.params.date}`}>
            <Button> Create Event</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}
