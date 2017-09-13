import React, {Component} from 'react';

class Book extends Component {

  state = {
		shelf: ''
	}

  componentDidMount() {
		let shelfToMount = ''

		if (this.props.data.shelf)  {
			shelfToMount = this.props.data.shelf
		} else {
      let matches = this.props.books.filter((book) => book.id === this.props.data.id)
      shelfToMount = matches.length > 0 ? matches[0].shelf : ''
    }

		this.setState({ shelf: shelfToMount})
	}

  handleUpdateShelf(book, shelf) {
    this.props.updateBookShelf(book, shelf);
  }

  render() {
    const { data, shelves } = this.props;
    const { shelf } = this.state;

    return(
      <div className="col s12 m3 l3 xl3">
        <div className="card book">
          <div className="card-image">
            <img src={data.imageLinks.thumbnail} alt={data.title}/>
          </div>
          <div className="card-content">
            <span className="card-title">{data.title}</span>
            <p>{data.authors ? data.authors.join(', '): 'No authors available'}</p>
          </div>
          <div className="card-action">
            <select
              value={shelf}
              onChange={ event => this.handleUpdateShelf(data, event.target.value)}>
							<option value="none" disabled>Move to...</option>
							{shelves.map((shelve) => (
								<option key={shelve.keyword} value={shelve.keyword}>{shelve.name}</option>
							))}
              {shelf === '' &&
								<option value=''>None</option>
							}
						</select>
          </div>
        </div>
      </div>
    )
  }
}

export default Book;
