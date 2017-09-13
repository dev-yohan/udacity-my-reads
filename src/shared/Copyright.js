import React, {Component} from 'react';

class Copyright extends Component {
  render() {
    return (
      <div className="copyright footer-copyright">
        <div className="container">
        © 2017 Yohan Morales
        <a href='mailto:yohanmorales@hotmail.com' className="grey-text text-lighten-4 right">
          yohanmorales@hotmail.com
        </a>
        </div>
      </div>
    )
  }
}

export default Copyright;
