import React from "react";
import Header from "../Header/Header";
import { Container } from "./StartScreenStyle";
import { Button } from "../../styles/Button";

function StartScreen(props) {
  return (
    <>
      <Header />
      <Container>
        <p>Clique no botão abaixo para começar a jogar.</p>
        <Button onClick={props.startGame}>Iniciar</Button>
      </Container>
    </>
  );
}

export default StartScreen;
