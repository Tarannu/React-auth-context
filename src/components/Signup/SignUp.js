import React, { useRef } from "react";
import { Container,Form, Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //const {signup} =useAuth();

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   signup(emailRef.current.value,passwordRef.current.value);

  //}
  return (
    <Container>

    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
        <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required/>
        </Form.Group>
        <Form.Group id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} required/>
        </Form.Group>
        <Form.Group id="password-confirm">
        <Form.Label>Password Confirm</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} required/>
        </Form.Group>
        <Button type="submit" className="w-100" >Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
    
  
    <div className="w-100 text-denter mt-2">
      Already have an account? Log in
    </div>
    <div><Link to="/booklist">Continue As Guesst</Link></div>
    </Container>
    
  );
};

export default SignUp;
