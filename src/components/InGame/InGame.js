import React from "react";
import { Button } from "../../styles/Button";
import Header from "../Header/Header";
import {
  AttemptsContainer,
  Container,
  InfoContainer,
  Letters,
  LettersContainer,
  WrongLetteresContainer,
} from "./InGameStyle";

const InGame = ({
  verifyLetter,
  selectCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guessesUser,
  score,
}) => {
  const [letter, setLetter] = React.useState("");
  const letterInputRef = React.useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <>
      <Header />
      <Container>
        <InfoContainer>
          <p>Pontuação: {score}</p>
          <h2>Adivinhe a palavra secreta</h2>
          <h3>
            Dica: <span>{selectCategory}</span>
          </h3>
        </InfoContainer>
        <Letters>
          {letters.map((letter, index) =>
            guessedLetters.includes(letter) ? (
              <span key={index}>{letter}</span>
            ) : (
              <span key={index}>&nbsp;</span>
            )
          )}
        </Letters>
        <LettersContainer>
          <p>Tente uma letra:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              value={letter}
              maxLength="1"
              onChange={(event) => setLetter(event.target.value)}
              ref={letterInputRef}
              autoFocus
              required
            />
            <Button>Jogar</Button>
          </form>
        </LettersContainer>
        <AttemptsContainer>
          <p>Número de tentativa(s):</p>
          <span>{guessesUser}</span>
        </AttemptsContainer>
        <WrongLetteresContainer>
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </WrongLetteresContainer>
      </Container>
    </>
  );
};

export default InGame;
