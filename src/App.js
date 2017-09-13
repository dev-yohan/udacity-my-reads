import React from 'react';
import { Route } from 'react-router-dom';
// Third party
import * as BooksAPI from './thirdParty/BooksAPI';
// Components
import Header from './shared/Header';
import Footer from './shared/Footer';
import Readings from './components/Readings';
import SearchBooks from './components/SearchBooks';
// Styles
import './styles/App.css';

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  		shelves:  [
  			{keyword: "currentlyReading", name: "Currently Reading"},
  			{keyword: "wantToRead", name: "Want to Read"},
  			{keyword: "read", name: "Read"}
  		],
  		books: ''
  	}

    this.getCurrentBooks = this.getCurrentBooks.bind(this);
    this.updateBookShelf = this.updateBookShelf.bind(this);
  }

  getCurrentBooks(){
    BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
  }

  updateBookShelf(book, shelf){
    BooksAPI.update(book, shelf).then(() => {
			book.shelf = shelf;
      this.getCurrentBooks()
		})
  }

  componentDidMount(){
    this.getCurrentBooks()
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='container'>
          <Route exact path="/" render={() => (
  					<Readings
              books={this.state.books}
              shelves={this.state.shelves}
              updateBookShelf={this.updateBookShelf}
            />
  				)} />
          <Route path="/search" render={() => (
            <SearchBooks
              books={this.state.books}
              shelves={this.state.shelves}
              updateBookShelf={this.updateBookShelf}
            />
  				)} />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default BooksApp;
