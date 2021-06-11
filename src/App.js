import React, {Component} from 'react';
import SelectMenu from './SelectMenu';
import BookList from './Home';
import {books} from './books';
import Dropmenu from './Dropmenu';
import Checkbox from './Checkbox';
import Mealplan from './Mealplan';
import NavigationBar from './NavigationBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            housings: books, searchBooks: '', option:'', checkbox: false, meal: false
        }
    }

    handleInput=(e) => {
        this.setState({searchBooks: e.target.value})
    }
    handleCheckbox=(e) =>{
        this.setState({checkbox: e.target.checked})

  }
  handleMeal=(e) =>{
        this.setState({meal: e.target.checked})

  }

    
    optionSelected=(e) => {
        this.setState({
            option: e.target.value
        })
    }

    render(){
        let filteredBooks= this.state.housings.filter((book) => {
            let str,str2;
            if (this.state.checkbox.toString().toLowerCase()==='false'){
                str='';
            }
            else{
                str='true';
            }

            if (this.state.meal.toString().toLowerCase()==='false'){
                str2='';
            }
            else{
                str2='true';
            }
            return book.Bedroom.toLowerCase().includes(this.state.option.toLowerCase()) && book.title.toLowerCase().includes(this.state.searchBooks.toLowerCase()) && book.sprivate.toLowerCase().includes(str) && book.mplan.toLowerCase().includes(str2);
        })
        
        /*let filteredMenu= this.state.housings.filter((book) => {
            return  book.Bedroom.toLowerCase().includes(this.state.option.toLowerCase());
        })*/

        return (
        <div className="App">
            
            <NavigationBar/>
            <div class="SearchBars">
            <SelectMenu handleInput ={this.handleInput}/>
            <Dropmenu optionSelected={this.optionSelected}/>
            <Checkbox  handleCheckbox={this.handleCheckbox}/>
            <Mealplan  handleMeal={this.handleMeal}/>
            </div>
            <BookList filteredBooks={filteredBooks}/>
        </div>
        );
    }
}

export default App;