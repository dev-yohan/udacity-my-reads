import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Listings extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">My Reads</h5>
            <p className="grey-text text-lighten-4">
              Search and bookmark your favorite books.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/">Home</Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/search">Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Listings;
