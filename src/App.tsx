import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import BODY_PARTS from "./Hangman/BodyParts";
import backgroundImage from './assets/background.jpg';
import dashboardImage from './assets/dashboard.jpg';
import backgroundAudio from './assets/background_music.mp3';
import { HangmanDrawing } from "./Hangman/HangmanDrawing";
import { HangmanWord } from "./Hangman/HangmanWord";
import { ModalKeyboard } from "./Hangman/ModalKeyboard";
import { ModalWinnerLoser } from "./Hangman/ModalWinnerLoser";
import { Dashboard } from "./Dashboard/Dashboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [startGame, setStartGame] = useState<boolean>(false);
  
  const handleButtonClick = () => {
    setStartGame(!startGame);
  };

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

  useEffect(() => {
    const audio: HTMLAudioElement | null = document.getElementById("background_audio_id") as HTMLAudioElement | null;

    if (audio) {
      audio.play();
    }
  }, [startGame]);
  
  return (
    <div>
      <audio id="background_audio_id" src={backgroundAudio}/>

      {startGame == false 
        ? <div>
            <img src={dashboardImage} alt="Background Image" style={{ 
                position: 'absolute',
                top: "0",
                left: "0",
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                zIndex: '-1',
            }}/>
           <Dashboard startGame={startGame} handleButtonClick={handleButtonClick}/>     
          </div>
      : <div>
          <img src={backgroundImage} alt="Background Image" style={{ 
              position: 'absolute',
              top: "0",
              left: "0",
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              zIndex: '-2',
          }}/>
          <ModalKeyboard
            disabled={isWinner || isLoser}
            activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetter={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />

          <ModalWinnerLoser isWinner={isWinner} isLoser={isLoser}/>
          
          <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "70vw",
              right: "0",
              position: "absolute"
            }}
          >
            <br/>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <br/>
            <HangmanWord revealWord={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
          </div>
        </div>
      }
    </div>
  )
}

export default App
