type HangmanWordProps = {
    revealWord?: boolean
    guessedLetters: string[]
    wordToGuess: string
}


export function HangmanWord({revealWord = false, guessedLetters, wordToGuess} : HangmanWordProps) {
    return <div style={{ 
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} 
                key={index} //just to make each of letter is unique
            >
                <span style={{ 
                    visibility: guessedLetters.includes(letter) || revealWord 
                        ? "visible" 
                        : "hidden",
                        color: !guessedLetters.includes(letter) && revealWord ? "red" : "black"
                 }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}