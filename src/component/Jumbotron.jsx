import React, { Component } from 'react'
import './jumbotron.css';
export default class jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4" >{this.props.title}</h1>
            <p class="lead">{this.props.subtitle}</p>
        </div>
      </div>
    )
  }
}
