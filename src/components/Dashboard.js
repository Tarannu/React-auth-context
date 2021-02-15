import React from 'react';
import Nav from './Navbar';
import BookList from './BookList';
import BookForm from './BookForm';

const Dashboard = () => {
    return (
        <div>
            I am home page
            <Nav/>
            <BookList/>
            <BookForm/>
        </div>
    )
}

export default Dashboard
