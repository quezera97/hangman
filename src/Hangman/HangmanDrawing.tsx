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
                background: "white", 
                top: 0,
                right: 0,
                position: "absolute", 
            }}/>
            <div style={{ 
                height: "10px", 
                width: "150px", 
                background: "white", 
                marginLeft: "125px"
            }}/>
            <div style={{ 
                height: "350px", 
                width: "10px", 
                background: "white", 
                marginLeft: "125px"
            }}/>
            <div style={{ 
                height: "10px", 
                width: "250px", 
                background: "white"
            }}/>

        </div>
    )
}