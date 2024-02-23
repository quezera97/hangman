import BODY_PARTS from "./BodyParts";

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
    return (
        <div style={{ 
            position: "relative", //to make sure all the component body parts in this container
        }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ 
                height: "50px", 
                width: "10px", 
                background: "black", 
                top: 0,
                right: 0,
                position: "absolute", 
            }}/>
            <div style={{ 
                height: "10px", 
                width: "150px", 
                background: "black", 
                marginLeft: "125px"
            }}/>
            <div style={{ 
                height: "400px", 
                width: "10px", 
                background: "black", 
                marginLeft: "125px"
            }}/>
            <div style={{ 
                height: "10px", 
                width: "250px", 
                background: "black"
            }}/>

        </div>
    )
}