import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
  render() {
    return (
      <div>
      <footer class="footer">
      <div class="container">
        <span class="text-muted">My Website &#169;RaviBeniwal{new Date().getFullYear
            }</span>
      </div>
    </footer>
      </div>
    )
  }
}
