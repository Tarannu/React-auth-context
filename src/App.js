import './App.css';
import Nav from './components/Navbar';
import BookList from './components/BookList';
import SongList from './components/SongList';
import BookContextProvider from './contexts/BookContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
     <Nav/>
     <BookContextProvider>
     <BookList/>
     </BookContextProvider>
     <SongList/>
     </AuthContextProvider>
    </div>
  );
}

export default App;
