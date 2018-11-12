import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";
//import { Table, Button } from "antd";
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const database = firebase.database();
//const FormItem = Form.Item;

let dataSource = [];
//const EditableContext = React.createContext();

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
    dataSource:[],
    
  };

  componentWillMount(){
    database.ref('/events').orderByChild('eventDate').equalTo(this.props.match.params.date).on('value',(snapshot)=>{
      if(snapshot.exists()){
        this.setState({
          dataSource:Object.values(snapshot.toJSON())
          //key:Object.values(snapshot.toJSON())
        })
      }
    })
  }
  
  componentDidMount() {
    database.ref('events/').on('value', snapshot => {
      const newList = this.state.dataSource;
      newList.push({
        showId: snapshot.key,
        eventAddress:snapshot.val().eventAddress,
        eventCompany:snapshot.val().eventCompany,
        eventDate:snapshot.val().eventDate,
        eventGuest:snapshot.val().eventGuest,
        eventName:snapshot.val().eventName,
        eventSeatNumbers:snapshot.val().eventSeatNumbers
        
      });
      this.setState({
        dataSource: newList
      });
      console.log('test', JSON.stringify(newList))
    });
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

DeleteEvent(){

let index = this.state.dataSource.indexOf(dataSource);
this.state.dataSource.splice(index, 1);
this.setState(this.state.dataSource)


};
removeEvent=()=>{
let dataindex=this.state.dataSource.indexOf(dataSource);

this.state.dataSource.splice(dataindex,1);
this.setState({dataSource:this.state.dataSource})
firebase.database().ref().child('events/'+dataindex+'/').remove();
}

handleDelete = (key) => {
{console.log('key')}

const dataSource = [...this.state.dataSource];
this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
}


  UpdateEvent=()=>{
    this.setState({

    })
  }



  render() {
    const { dataSource } = this.state;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "EventName",
        dataIndex: "eventName",
        key: "eventName",
        filters: [
          { text: "ravi", value: "Google" },
          { text: "mandeep", value: "Microsoft" }
        ],
        filteredValue: filteredInfo.eventName || null,
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
      {
        title: 'operation',
        dataIndex: 'operation',
        key:'operation',
        render: (text,record) => {
          return (
            this.state.dataSource.length >= 1
              ? (
                
                
                <Popconfirm   title="Sure to delete?" onConfirm={() => this.removeEvent(record.key)}>
                  <a href="javascript:;">Delete</a>
                </Popconfirm>
              
              ): null
          );
        },
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
            dataSource={this.state.dataSource}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <NavLink to={`/CreateEvent/${this.props.match.params.date}`}>
            <Button> Create Event</Button>
            
          </NavLink>
        </div>
        <div className="container">
        <Button onclick={()=>{this.DeleteEvent()}}>Delete Events</Button>
        <Button onclick={()=>{this.UpadteEvent()}}>Update Events</Button>
          </div>
       
      </div>
    );
  }
}
