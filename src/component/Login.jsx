import React, { Component } from 'react'
import  { NavLink } from 'react-router-dom'
import Game from './Game';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
            this is a login page
        </div>
        <NavLink to={'/Home'}>
        Go to Home
        </NavLink>
        <NavLink to={'/Game'} >
            Go to game
            <Game/>
        </NavLink>
      </div>
    )
  }
}
