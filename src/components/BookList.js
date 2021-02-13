import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import ThemeContext from '../contexts/ThemeContext';

const BookList = () => {
    const {books} = useContext(BookContext);
    return (
        <div className='Booklist'>
        <ul>
        {books.map(book=>{
            return(
                <li >{book.title}</li>
            )
        })}
        
        </ul>
            
        </div>
    )
}

export default BookList
