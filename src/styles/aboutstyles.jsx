import { createUseStyles } from "react-jss";

const useStyles= createUseStyles({
     container:{
        backgroundColor: "#E9D5CA",
        color:"#363062",
        height: "100vh",
        paddingTop:"5%",
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
        
    },
    txtCont:{
        backgroundColor:'#4D4C7D',
        borderRadius: "30px",
        width:"50%",
       
        padding:"2%",
        // textAlign:"center",
        // backgroundColor:"#827397",
    },
    flexbox:{
        display:"flex",
        flexDirection:"Row",
        color: "#E9D5CA",
        justifyContent:"space-between",
    },
    h1:{
        fontFamily:"'Lato', sans-serif",
        fontSize:"500%",
    },
    h4:{
        fontSize:"200%",
        fontFamily:"'Lato', sans-serif",
        // color:"#827397",
    },
    p:{
        fontSize:"120%",
        marginBottom:'10%',
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
            backgroundColor: "#4D4C7D",
            // color:"#E9D5CA",
            
          },
    },
    skill:{
        backgroundColor:'#4D4C7D',
        borderRadius: "30px",
        padding:"2%",
        width:"50%",
    },
    image:{
        marginRight:"20px",
        marginLeft:"20px",
        width:"25%",
        height:"25%",
        alignSelf:"center",
    }
})

export default useStyles;