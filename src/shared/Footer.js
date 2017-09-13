import React, {Component} from 'react';
import Listings from './Listings';
import Copyright from './Copyright';

class Footer extends Component {

  render() {
    return (
      <footer className="page-footer footer">
        <Listings/>
        <Copyright/>
      </footer>
    )
  }

}

export default Footer;
