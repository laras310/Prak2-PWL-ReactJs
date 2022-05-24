import { createUseStyles } from "react-jss";

const useStyles= createUseStyles({
     container:{
        backgroundColor: "#E9D5CA",
        color:"#363062",
        height: "auto",
    },
    box:{
        height:"50%",
        width:"80%",
        margin:"auto",
        padding:"4%",
        
    },
    
    txtCont:{
        backgroundColor:'#363062',
        borderRadius: "30px",
        width:"60%",
       
        padding:"2%",
        textAlign:"justify",
        // backgroundColor:"#827397",
    },
    flexbox:{
        display:"flex",
        flexDirection:"column",
        color: "#E9D5CA",
        // justifyContent:"space-between",
    },
    h2:{
        fontFamily:"'Lato', sans-serif",
        fontSize:"250%",
    },
    h4:{
        fontSize:"150%",
        fontFamily:"'Lato', sans-serif",
        color:"#827397",
    },
    p:{
        fontSize:"20px",
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
        height:"50%",
        width:"50%",
        borderRadius: "30px",
    },
    flexrow:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#363062",
        marginBottom:"10%",
        borderRadius: "30px",
    },
    project:{
        margin:"1%",
    },
    commentSection:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#827397",
    },
    commentSubmittion:{
        width: "80%",
        backgroundColor: "#E9D5CA",
        borderRadius: "30px",
        padding: "15px",
        margin: "20px",
        // border: "5px solid #6D8B74",
    },
    commentInput:{
        width: "100%",
    },
    comment:{
        width: "80%",
        backgroundColor: "#E9D5CA",
        borderRadius: "30px",
        padding: "10px",
        margin: "20px",
        // border: "5px solid #6D8B74",
    },
})

export default useStyles;