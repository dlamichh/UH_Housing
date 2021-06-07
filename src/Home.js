import React, {Component} from 'react';
import'./index.css'

import {books} from './books';
import Book from './Book';


function BookList(props){
    let books= props.filteredBooks.map((book,i) => {
            const {img,title,author}= book;
            return <Book key={book.id} book = {book}> </Book>; 
        })
    return(
        <section className='booklist'>
            {books}
        </section>
    );
}

export default BookList
