import React from 'react';
import'./index.css'

import {books} from './books';
import Book from './Book';


function BookList(){
    return(
        <section className='booklist'>
        {books.map((book) => {
            const {img,title,author}= book;
            return <Book key={book.id} book = {book}> </Book>; 
        })}
        </section>
    );
}

export default BookList
