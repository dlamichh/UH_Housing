import React from 'react';
import ReactDom from 'react-dom'
import'./index.css'

import {BrowserRouter as Router, Route, Switch} from'react-router-dom';

import {books} from './books';
import Book from './Book';
import {greeting} from './testing/testing';
import CougarVillageI from './CougarVillageI';
import Navbar from './Navbar'

function BookList(){
    return(
        <section className='booklist'>
            <select onChange={e => this.setState({filter: e.target.value})}>
                <option value="">All</option>
                <option value="Internal">Internal</option>
                <option value="External">External</option>
            </select>
            <br /><br />
        {books.map((book) => {
            const {img,title,author}= book;
            return <Book key={book.id} book = {book}> </Book>;     
        })}
        </section>
    );
}

export default BookList
