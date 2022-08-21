import React from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import InGame from "./components/InGame/InGame";
import EndGame from "./components/EndGame/EndGame";

import "./styles/GlobalStyle.css";
import { wordList } from "./data/data.js";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = React.useState(stages[0].name);
  const [words] = React.useState(wordList);
  const [selectWord, setSelectWord] = React.useState("");
  const [selectCategory, setSelectCategory] = React.useState("");
  const [letters, setLetters] = React.useState([]);
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [wrongLetters, setWrongLetters] = React.useState([]);
  const [guessesUser, setGuessesUser] = React.useState(guessesQty);
  const [score, setScore] = React.useState(0);

  const selectWordAndCategory = React.useCallback(() => {
    const categories = Object.keys(words);
    const randomCategory =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const randomWord =
      words[randomCategory][
        Math.floor(Math.random() * words[randomCategory].length)
      ];

    return { randomCategory, randomWord };
  }, [words]);

  const startGame = React.useCallback(() => {
    clearStates();

    const { randomCategory, randomWord } = selectWordAndCategory();

    const wordInLetters = randomWord.toLowerCase().split("");

    setSelectWord(randomWord);
    setSelectCategory(randomCategory);
    setLetters(wordInLetters);

    setGameStage(stages[1].name);
  }, [selectWordAndCategory]);

  const verifyLetter = (letter) => {
    if (
      guessedLetters.includes(letter) ||
      wrongLetters.includes(letter) ||
      letter === " "
    ) {
      return;
    }

    if (letters.includes(letter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);

      setGuessesUser((actualGuessesUser) => actualGuessesUser - 1);
    }
  };

  function clearStates() {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuessesUser(guessesQty);
  }

  React.useEffect(() => {
    if (guessesUser <= 0) {
      clearStates();
      setGameStage(stages[2].name);
    }
  }, [guessesUser]);

  React.useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((score) => (score += 100));

      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const retry = () => {
    setScore(0);
    setGuessesUser(guessesQty);
    setGameStage(stages[0].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <InGame
          verifyLetter={verifyLetter}
          selectWord={selectWord}
          selectCategory={selectCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guessesUser={guessesUser}
          score={score}
        />
      )}
      {gameStage === "end" && (
        <EndGame retry={retry} score={score} selectWord={selectWord} />
      )}
    </>
  );
}

export default App;
