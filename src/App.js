import React, {Component} from 'react';
import SelectMenu from './SelectMenu';
import BookList from './Home';
import {books} from './books';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            housings: books, searchBooks: ''
        }
    }

    handleInput=(e) => {
        console.log(e.target.value);
        this.setState({searchBooks: e.target.value})
    }
    render(){
        let filteredBooks= this.state.housings.filter((book) => {
            return  book.title.toLowerCase().includes(this.state.searchBooks.toLowerCase());
        })

        return (
        <div className="App">
            <h1>UH Housing</h1>
            <SelectMenu handleInput ={this.handleInput}/>
            <BookList filteredBooks={filteredBooks}/>
        </div>
        );
    }
}

export default App;