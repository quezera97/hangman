type HangmanWordProps = {
    revealWord?: boolean
    guessedLetters: string[]
    wordToGuess: string
}


export function HangmanWord({revealWord = false, guessedLetters, wordToGuess} : HangmanWordProps) {
    return <div style={{ 
        display: "flex",
        gap: ".15em",
        fontSize: "8vw",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid white" }} 
                key={`${letter}-${index}`}
                className="honk-unique"
            >
                <span style={{ 
                    visibility: guessedLetters.includes(letter) || revealWord 
                        ? "visible" 
                        : "hidden",
                        color: !guessedLetters.includes(letter) && revealWord ? "red" : "white"
                 }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}