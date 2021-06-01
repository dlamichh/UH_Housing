import React from 'react'
import { Link } from 'react-router-dom';
const Book = (props) =>{
    const {img,title,author}= props.book;
    //attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler= (e) => {
       console.log(e);
       console.log(e.target);
       alert('hello world');
    };
    return (
    <article className='book' onMouseOver ={ () =>{
        console.log(title);
    }}> 
        <img src={img} alt=''/>
        <h1 onClick={() => console.log(title)} > {title}</h1> 
        <h3> {author} </h3> 
        <button type="button" onClick={clickHandler}>
            reference example
        </button>
    </article>
    );
};


export default Book
