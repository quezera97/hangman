export function HangmanWord() {
    const word = "test";
    const guessedLetters = "t";

    return <div style={{ 
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
    }}>
        {word.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} 
                key={index} //just to make each of letter is unique
            >
                <span style={{ 
                    visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
                 }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}