const HEAD = (
    <div style={{ 
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "40px",
        right: "-30px",
     }}></div>
)
const BODY = (
    <div style={{ 
        width: "10px",
        height: "120px",
        background: "black", 
        position: "absolute",
        top: "110px",
        right: "0px",
     }}></div>
)
const RIGHT_HAND = (
    <div style={{ 
        width: "10px",
        height: "80px",
        background: "black", 
        position: "absolute",
        top: "65px",
        right: "-35px",
        rotate: "60deg"
     }}></div>
)
const LEFT_HAND = (
    <div style={{ 
        width: "10px",
        height: "80px",
        background: "black", 
        position: "absolute",
        top: "65px",
        right: "35px",
        rotate: "-60deg"
     }}></div>
)
const RIGHT_LEG = (
    <div style={{ 
        width: "10px",
        height: "100px",
        background: "black", 
        position: "absolute",
        bottom: "100px",
        right: "-25px",
        rotate: "150deg"
     }}></div>
)
const LEFT_LEG = (
    <div style={{ 
        width: "10px",
        height: "100px",
        background: "black", 
        position: "absolute",
        bottom: "100px",
        right: "25px",
        rotate: "-150deg"
     }}></div>
)

export function HangmanDrawing() {
    return (
        <div style={{ 
            position: "relative", //to make sure all the component body parts in this container
        }}>
            {HEAD}
            {BODY}
            {RIGHT_HAND}
            {LEFT_HAND}
            {RIGHT_LEG}
            {LEFT_LEG}
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