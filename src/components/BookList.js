import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import ThemeContext from '../contexts/ThemeContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext);


    return books.length? (
        <div className='Booklist'>
        <ul>
        {books.map(book=>{
            return(
                <BookDetails book={book} key={book.id}/>
            )
        })}
        
        </ul>
            
        </div>
    ):(
        <div className='empty-books'>No Books to read</div>
    )
}

export default BookList
