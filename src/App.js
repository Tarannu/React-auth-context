import "./App.css";
import Nav from "./components/Navbar";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookForm from "./components/BookForm";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignUp from "./components/Signup/SignUp";
import login from "./components/Signup/login";
import Dashboard from "./components/Dashboard";
import PublicDashboard from "./components/PublicDashboard";

function App() {
  return (
    <div className="App">
    <Router>
      <AuthContextProvider>
        <BookContextProvider>
         
          <Switch>
          <Route path="/" exact component={PublicDashboard}  />
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={login} />
          <Route path="/list" component={Dashboard}/>
         
          </Switch>
        </BookContextProvider>
      </AuthContextProvider>
      </Router>
    </div>
  );
}
const Home=()=>{
  // <Route path="/booklist" component={Home}/>
  return (
    <div>
    <Nav/>
    <BookList/>
    <BookForm/>
    </div>
  )
}

export default App;