import { useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState((getWord));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div style={{ 
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column", //stack on top of another
        gap: "2rem", //make all component ot have gap 2rem
        margin: "0 auto", //to center everything in 800px
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}> Lose Win </div>
      
      <HangmanDrawing/>
      <HangmanWord/>

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard/>
      </div>
    </div>
  )
}

export default App
