import sizes from "./sizes";
export default{
    palette:{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    paletteColors:{
        height:"90%",
    },
    colorBox:{
        height:"50%",
        width: "20%",
        cursor: "pointer",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        marginBottom: "-4px",
        "&:hover button" :{
            opacity:"1",
        }
    },
    blackBox:{
        backgroundColor:"black",
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.3333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    },
    goBackBtn:{
        color:"white",
        width: "100px",
        height: "30px",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        cursor: "pointer",
        position: "absolute",
    }
}