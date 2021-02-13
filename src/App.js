import "./App.css";
import Nav from "./components/Navbar";
import BookList from "./components/BookList";
import SongList from "./components/SongList";
import BookContextProvider from "./contexts/BookContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BookContextProvider>
          <Nav />
          <BookList />
          <BookForm/>
        </BookContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
