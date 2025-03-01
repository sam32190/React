import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 35px 45px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const App1 = () => {
  return (
    <>
      <Button>Click Me Button is applied with css </Button>
    </>
  );
};

export default App1;
