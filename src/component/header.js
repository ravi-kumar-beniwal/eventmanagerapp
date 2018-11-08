import React, { Component } from 'react'
import Game from './Game';
import  { NavLink } from 'react-router-dom'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Alaska',
            age:10
        }
    }
    incrementAge(){
        this.setState(
            (prevState)=>{
                console.log('prevState',prevState)
                return {
                    age:prevState.age+1,
                    location:prevState.location=='Alaska'?'India':'Alaska'
                }
            }
        )
    }
    render() {
        return (
            <div>
                <div>
                    I am a header. and my name is {this.props.name}, and my age is {this.state.age}, ang my location is {this.state.location}
                </div>
                {console.log('newstate',this.state)}
                {console.log('props',this.props)}
                <button onClick={()=>{
                    this.incrementAge()
                }}>
                change age
                </button>
            
            </div>
        )
    }
}
