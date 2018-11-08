import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
import { DatePicker } from 'antd';
import firebase from '../firebase'
import moment from 'moment';
const database= firebase.database();

// import * as firebase from 'firebase'
const FormItem = Form.Item;
class C extends Component {

    state = {
        eventName:'Fundraiser',
        eventAddress:'Tangra',
        eventDate:'',
        eventCompany:'SC',
        eventGuest:'ABC',
        eventSeatNumbers:'12'
      }
      componentWillMount(){
          this.setState({
              eventDate:moment(this.props.match.params.date)
          })
      }
     

    onSubmit = (e) => {
        //TODO: Save data on firebase
        var datetime = new Date(this.state.eventDate._d);
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
        database.ref('/events').push({
            eventName:this.state.eventName,
            eventAddress:this.state.eventAddress,
            eventDate:newDate,
            eventCompany:this.state.eventCompany,
            eventGuest:this.state.eventGuest,
            eventSeatNumbers:this.state.eventSeatNumbers
        })
    }
   
 onChange=(date, dateString) =>{
    console.log(date, dateString);
  }
  render() {
       //const { getFieldDecorator } = this.props.form;
    return (
        <div className="container" style={{display:'flex'}}>
        <div style={{width:400 , margin:'auto'}}>
          <h1>Create A Event</h1>
      {console.log(this.props)
      }
        <FormItem>
          
            <Input value={this.state.eventName} onChange={(e)=>{
                this.setState({
                    eventName:e.target.value
                })
            }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" please Enter eventName" />

        </FormItem>

        <FormItem>
          
            <Input value={this.state.eventAddress} onChange={(e)=>{
                this.setState({
                    eventAddress:e.target.value
                })
            }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" Please Enter eventAddress" />
        
        </FormItem>

        <FormItem>
          
          
            <DatePicker  style={{ color: 'rgba(0,0,0,.25)', width:400 }} value={this.state.eventDate} onChange={(e)=>{
                console.log(e);

                this.setState({
                    eventDate: moment(e._d)
                 })
            }} />

        </FormItem>
        <FormItem>
          
          <Input value={this.state.eventCompany} onChange={(e)=>{
                this.setState({
                    eventCompany:e.target.value
                })
            }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" Event Company " />

        </FormItem>

        <FormItem>
          
          <Input value={this.state.eventGuest} onChange={(e)=>{
                this.setState({
                    eventGuest:e.target.value
                })
            }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" Event Main Guest " />

        </FormItem>

        <FormItem>
        <Input value={this.state.eventSeatNumbers} onChange={(e)=>{
                this.setState({
                    eventSeatNumbers:e.target.value
                })
            }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Number OF seat Required" />
            
        </FormItem>

        

        {console.log(this.state)}          
          <FormItem>
               <Button 
               type="primary" 
               htmlType="submit" 
               className="login-form-button" 
               onClick={(e)=>{
                   
                //console.log(alert('name'));
                 this.onSubmit()
               }}>
                   save Data
               </Button>
          </FormItem>
          
      
      </div>
      </div>
     
    )
  }
}
const CreateEvent = Form.create()(C);
export default CreateEvent;
