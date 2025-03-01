import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  font-weight: bolder;
`;

const H2 = styled.h2`
  font-family: sans-serif;
  font-size: 32px;
  font-weight: lighter;
  color: blue;
`;

const Header = styled.header`
  font-family: sans-serif;
  font-size: 25px;
  font-weight: lighter;
  color: orange;
  background-color: black;
  display: inline-block;
`;

const Footer = styled.footer`
  font-family: sans-serif;
  font-size: 20px;
  padding: 120px 20px;
  font-weight: lighter;
  color: green;
`;
const App4 = () => {
  return (
    <>
      <H1> I am H1 </H1>
      <H2> I am H2 </H2>

      <Header> I am a Header </Header>
      <Footer> I am a Footer </Footer>
    </>
  );
};

export default App4;
