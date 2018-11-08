import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Jumbotron from './Jumbotron.jsx'
import Footer from './Footer.jsx'
import 'antd/dist/antd.css';
import moment from 'moment';
//import { Button } from 'antd';
//import { Actions } from "react-native-router-flux";
//import { Link } from 'react-router-dom'
//import { Calendar, Alert } from 'antd';
//import { NavLink } from 'react-router-dom'
//import AnchorLink from 'antd/lib/anchor/AnchorLink';
//import { Table, Divider, Tag } from 'antd';


import { Table, Button } from 'antd';



const data = [{
    key: '1',
    name: 'ravi',
    age: 32,
    address: 'sirsa No. 1 Lake Park',
  }, {
    key: '2',
    name: 'beniwal',
    age: 42,
    address: 'haryana 1 Lake Park',
  }, {
    key: '3',
    name: 'joban',
    age: 32,
    address: 'punjab 1 Lake Park',
  }, {
    key: '4',
    name: 'mandeep',
    age: 32,
    address: 'tangra No. 2 Lake Park',
  }];

export default class EventPage extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
      };
    
      handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
      }
    
      clearFilters = () => {
        this.setState({ filteredInfo: null });
      }
    
      clearAll = () => {
        this.setState({
          filteredInfo: null,
          sortedInfo: null,
        });
      }
    
      setAgeSort = () => {
        this.setState({
          sortedInfo: {
            order: 'descend',
            columnKey: 'age',
          },
        });
      }

     render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filters: [
            { text: 'ravi', value: 'Joe' },
            { text: 'mandeep', value: 'Jim' },
          ],
          filteredValue: filteredInfo.name || null,
          onFilter: (value, record) => record.name.includes(value),
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filters: [
            { text: 'London', value: 'London' },
            { text: 'New York', value: 'New York' },
          ],
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.address.includes(value),
          sorter: (a, b) => a.address.length - b.address.length,
          sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];



        return (
            <div>
                <div>
                    <Navbar />
                    <Jumbotron title="WELCOME TO EVENT MANAGEMENT" subtitle="TO WRITE EVENT CLICK ON THE DATE  " />
                </div>
                <div className="container">
                    <div className="table-operations">
                        <Button onClick={this.setAgeSort}>Sort age</Button>
                        <Button onClick={this.clearFilters}>Clear filters</Button>
                        <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                    </div>
                        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

