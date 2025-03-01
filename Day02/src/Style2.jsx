import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: green;
  font-family: sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 20px 470px;
  padding: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const App3 = () => {
  return (
    <Card>
      <h1> welcome to react</h1>
    </Card>
  );
};

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

// using functional component
function Component() {
  return <StyledButton> Login </StyledButton>;
}

// using class component
class Component1 extends React.Component {
  render() {
    return <StyledButton> Login </StyledButton>;
  }
}

export default App3;
