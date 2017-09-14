import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from '../thirdParty/BooksAPI'

class SearchBooks extends Component {

  state = {
		query: '',
		filteredBooks: ''
	}

  filterBooks = (query) => {
    this.setState({ query: query.trim() });
    BooksAPI.search(query, 20).then((books) => {
			this.setState({ filteredBooks: books})
		})
  }

  render() {
    const { books, shelves, updateBookShelf} = this.props
		const { query, filteredBooks } = this.state

    return (
      <div className='row'>
        <div className='row'>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  value={query}
                  onChange={(event) => this.filterBooks(event.target.value)}
                />
                <label htmlFor="icon_prefix">Search by Title or Author</label>
              </div>
            </div>
          </form>
        </div>
        <div className='row'>
          {filteredBooks && filteredBooks.length > 0 ? (
            filteredBooks.map((bookData, index) => (
              <Book key={`${bookData.id}`}
                data={bookData}
                shelves={shelves}
                shelfInfo={bookData.shelf}
                updateBookShelf={updateBookShelf}
                books={books}
              />
            ))
          ) : (
            <p>No books available</p>
          )}
        </div>
      </div>
    )}
}

export default SearchBooks;
