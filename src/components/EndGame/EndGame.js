import React from "react";
import Header from "../Header/Header";
import { Container } from "./EndGameStyle";
import { Button } from "../../styles/Button";

const EndGame = ({ retry, score, selectWord }) => {
  return (
    <>
      <Header />
      <Container>
        <h2>Fim de jogo!</h2>
        <h3>
          A palavra secreta era: <span>{selectWord}</span>
        </h3>
        <h3>
          A sua pontuação foi: <span>{score}</span>
        </h3>
        <Button onClick={retry}>Tentar novamente</Button>
      </Container>
    </>
  );
};

export default EndGame;
