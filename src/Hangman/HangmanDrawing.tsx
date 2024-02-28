import BODY_PARTS from "./BodyParts";

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
    return (
        <div style={{ 
            position: "relative",
            border: "white 5px solid"
        }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            
            <div style={{ 
                height: "40px", 
                width: "10px", 
                background: "red", 
                top: 0,
                right: '110px',
                position: "absolute", 
            }}/>
            <div style={{ 
                height: "12px", 
                width: "250px", 
                background: "red"
            }}/>
            <div style={{ 
                height: "59vh", 
                background: "none",
            }}/>
        </div>
    )
}