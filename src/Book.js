import React from 'react'
import { Link } from 'react-router-dom';
const Book = (props) =>{
    const {img,title,price,floor}= props.book;
    return (
    <article className='book' onMouseOver ={ () =>{
        console.log(title);
    }}> 
        <nav>
        <button>
        <Link to = {location => `${title}`}>
        <img src={img} alt=''/>
        <h1 onClick={() => console.log(title)} > {title}</h1> 
        <h3> {price} </h3> 
        <h2>{floor}</h2>
        <nav>
        </nav>
        </Link>
        </button>
        </nav>
    </article>
    );
};


export default Book
