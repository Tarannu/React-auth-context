import React from 'react';
import Nav from './Navbar';
import BookList from './BookList';


const PublicDashboard = () => {
    return (
        <div>
           
            <Nav/>
            <p>(To add new book and author sign up or login)</p>
            <BookList/>
            
        </div>
    )
}

export default PublicDashboard
