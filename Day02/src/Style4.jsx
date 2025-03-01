import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 700px;
  margin-left: 300px;
`;
const Button1 = styled.button`
  background-color: red;
  font-size: 20px;
  color: black;
`;

const Button2 = styled.button`
  background-color: green;
  font-size: 20px;
  color: black;
`;

const Button3 = styled.button`
  background-color: blue;
  font-size: 20px;
  color: black;
`;

const Button4 = styled.button`
  background-color: orange;
  font-size: 20px;
  color: black;
`;

const Button5 = styled.button`
  background-color: violet;
  font-size: 20px;
  color: black;
`;

const Button6 = styled.button`
  background-color: yellow;
  font-size: 20px;
  color: black;
`;

const Button7 = styled.button`
  background-color: aqua;
  font-size: 20px;
  color: black;
`;

const Button8 = styled.button`
  background-color: grey;
  font-size: 20px;
  color: black;
`;

function App5() {
  return (
    <>
      <ButtonContainer>
        <Button1> Red Button </Button1>
        <Button2> Green Button </Button2>
        <Button3> Blue Button </Button3>
        <Button4> Orange Button </Button4>
        <Button5> Violet Button </Button5>
        <Button6> Yellow Button </Button6>
        <Button7> Aqua Button </Button7>
        <Button8> Grey Button </Button8>
      </ButtonContainer>
    </>
  );
}

export default App5;
