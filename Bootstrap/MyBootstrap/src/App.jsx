import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h1> React Bootstrap Example </h1>

      <Form>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <FormLabel> Password </FormLabel>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default App;
