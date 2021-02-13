import React,{createContext,useState,useEffect} from 'react'
import {v1 as uuid} from 'uuid';

export const BookContext=createContext();

const BookContextProvider = (props) => {

    const [books,setBooks]=useState([
        {title:'name of the wind',author:'Patrick Rothfus',id:1},
        {title:'the way of kings',author:'Brandr Sanderson',id:2},
        {title:'Harry Potter',author:'J.K. Rowling',id:3}
    ])

    const addBook=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}])
    };
    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!==id));// return books that are not equal to the current id meaning removes the current book
    }
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books]);
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
        {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
