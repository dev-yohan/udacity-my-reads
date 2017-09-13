import React, {Component} from 'react';
import Shelf from './Shelf';

class Readings extends Component {

  render() {
    const { books, shelves, updateBookShelf } = this.props;
    return (
      <div className='row'>
        {shelves.map((shelf, index) => (
          <Shelf
            key={index}
            shelves={shelves}
            shelfInfo={shelf}
            books={books}
            updateBookShelf={updateBookShelf}
          />
  			))}
      </div>
    )}
}

export default Readings;
