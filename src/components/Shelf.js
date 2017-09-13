import React, {Component} from 'react';
import Book from './Book';

class Shelf extends Component {

  render() {
    const { books, shelfInfo, shelves, updateBookShelf} = this.props;
    return (
      <div className='row shelf'>
        <div className='col s1 m12 l22 xl12'>
          <h2>{shelfInfo.name}</h2>
          <div className='row'>
            {books ? (
              books.filter((book) => shelfInfo.keyword === book.shelf).map((bookData, index) => (
                <Book key={`${shelfInfo.keyword}_${index}`}
                  data={bookData}
                  shelves={shelves}
                  shelfInfo={shelfInfo}
                  updateBookShelf={updateBookShelf}
                />
              ))
            ) : (
              <p>No books available</p>
            )}
          </div>
        </div>
      </div>
    )}
}

export default Shelf;
