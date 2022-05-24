import { createUseStyles } from "react-jss";

const useStyles= createUseStyles({
     container:{
        backgroundColor: "#E9D5CA",
        color:"#363062",
        height: "100vh",
        // padding:"1%",
    },
    image:{
        height:"500px",
        width:"500px",
        backgroundColor: "#827397",
        borderRadius: "50%",
    },
    box:{
        height:"50%",
        width:"80%",
        margin:"auto",
        padding:"4%",
        // fontKerning:"normal",
    },
    txtCont:{
        // height:"100%",
        width:"100%",
        textAlign:"center",
        // backgroundColor:"#827397",
    },
    flexbox:{
        display:"flex",
        flexDirection:"row",
    },
    h1:{
        fontFamily:"'Lato', sans-serif",
        fontSize:"500%",
    },
    h4:{
        fontSize:"200%",
        fontFamily:"'Lato', sans-serif",
        color:"#827397",
    },
    p:{
        fontSize:"120%",
    },
    a:{
        backgroundColor:"#4D4C7D",
        textDecoration:"none",
        color:"#E9D5CA",
        borderRadius: "30px",
        padding: "1.5%",
        fontSize: "20px",
        // margin: "auto",
        '&:hover': {
            backgroundColor: "#827397",
            // color:"#E9D5CA",
            
          },
    }
})

export default useStyles;