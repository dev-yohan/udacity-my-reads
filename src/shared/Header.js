import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <nav className='header'>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">My Reads</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

}

export default Header;
