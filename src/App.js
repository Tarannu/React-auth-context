import "./App.css";
import Nav from "./components/Navbar";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookForm from "./components/BookForm";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <div className="App">
    <Router>
      <AuthContextProvider>
        <BookContextProvider>
         
          <Switch>
          <Route path="/" exact component={SignUp}/>
          <Route path="/booklist" component={Home}/>
          
          </Switch>
        </BookContextProvider>
      </AuthContextProvider>
      </Router>
    </div>
  );
}
const Home=()=>{
  return (
    <div>
    <Nav/>
    <BookList/>
    <BookForm/>
    </div>
  )
}

export default App;