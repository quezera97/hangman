import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import BODY_PARTS from "./BodyParts";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { ModalKeyboard } from "./ModalKeyboard";
import { ModalWinnerLoser } from "./ModalWinnerLoser";
// import { ModalWinnerLoser } from "./ModalWinnerLoser";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState((getWord));

  const [guessedLetters, setGuessedLetters] = useState<string[]>(['']);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= BODY_PARTS.length;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) 
      return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);

    // ...currentLetters (will add all before or current letters)
    // letter will add keypress letters into ocurrentLetters
  }, [guessedLetters, isLoser, isWinner]);

  /*
  
  addGuessedLetter function below is a regular function without the use of useCallback. 
  This means that every time the component re-renders, a new instance of the function is created.

  function addGuessedLetter(letter: string) {
    if(guessedLetters.includes(letter)) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }

  The primary advantage of using useCallback in this context is that it can
  potentially optimize the performance by preventing unnecessary re-creation of the addGuessedLetter function.

  */

  /*

  initially the handler will run once with empty array [''] in addGuessedLetter
  so add guessedLetters (dependancy array) to rerun the useEffect (because the guessedLetters are changing)
  to run setGuessedLetters() in order to add the letters inside the array
  if [] in useEffect, it will run setGuessedLetters() with initial state which the guessedLetters is empty array

  */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const letter = e.key;
      
      if(letter !== "Enter") return;

      e.preventDefault();

      setGuessedLetters([]);
      
      setWordToGuess(getWord());

      const modal: HTMLElement | null = document.getElementById("winnerLoserModal");

      if (modal) {
          modal.style.display = "none";
      }
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const letter = e.key;
      
      if(!letter.match(/^[a-z]$/)) return;
      
      e.preventDefault();
      
      addGuessedLetter(letter);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters]);

  return (
    <div>
      <ModalKeyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetter={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      <ModalWinnerLoser isWinner={isWinner} isLoser={isLoser}/>
      {/* <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Congrats! Press 'Enter' To Retry"}
        {isLoser && "Nice Try! Press 'Enter' To Retry"}
      </div> */}
      <div style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column", //stack on top of another
          gap: "2rem", //make all component ot have gap 2rem
          margin: "0 auto", //to center everything in 800px
          alignItems: "center",
          minWidth: "70%",
          right: "0",
          position: "absolute"
        }}
      >
        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord revealWord={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      </div>      
    </div>
  )
}

export default App
