import React, { useState,useRef } from "react";
import { Container,Form, Button,Card,Alert} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} =useAuth();
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);
  const history=useHistory();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      setError('');
      setLoading(true);
      await login(emailRef.current.value,passwordRef.current.value);
      history.push("/"); 
    }catch{
      setError('Failed to log in')
    }
    setLoading(false);
    

  }
  return (
    <Container>

    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert style={{color:'red'}}vaiant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required/>
        </Form.Group>
        <Form.Group id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} required/>
        </Form.Group>
        
        <Button disabled={loading} type="submit" className="w-100" >Log In</Button>
        </Form>
      </Card.Body>
    </Card>
    
  
    <div className="w-100 text-denter mt-2">
      Want to create an account? <Link to="/signup">Sign Up</Link>
    </div>
   
    </Container>
    
  );
};
// <div><Link to="/booklist">Continue As Guesst</Link></div>
export default Login;