const HEAD = (
    <div style={{ 
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid white",
        position: "absolute",
        top: "40px",
        right: "80px",
     }}></div>
)
const BODY = (
    <div style={{ 
        width: "10px",
        height: "15vh",
        background: "white", 
        position: "absolute",
        top: "110px",
        right: "110px",
     }}></div>
)
const RIGHT_HAND = (
    <div style={{ 
        width: "10px",
        height: "80px",
        background: "white", 
        position: "absolute",
        top: "90px",
        right: "150px",
        rotate: "60deg"
     }}></div>
)
const LEFT_HAND = (
    <div style={{ 
        width: "10px",
        height: "80px",
        background: "white", 
        position: "absolute",
        top: "90px",
        right: "75px",
        rotate: "-60deg"
     }}></div>
)
const RIGHT_LEG = (
    <div style={{ 
        width: "10px",
        height: "100px",
        background: "white", 
        position: "absolute",
        top: "32vh",
        right: "85px",
        rotate: "150deg"
     }}></div>
)
const LEFT_LEG = (
    <div style={{ 
        width: "10px",
        height: "100px",
        background: "white", 
        position: "absolute",
        top: "32vh",
        right: "135px",
        rotate: "-150deg"
     }}></div>
)

const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHT_HAND,
    LEFT_HAND,
    RIGHT_LEG,
    LEFT_LEG,
]

export default BODY_PARTS;