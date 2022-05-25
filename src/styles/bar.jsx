import { createUseStyles } from "react-jss";

const useStyles= createUseStyles({
    barContainer:{
        backgroundColor: "#E9D5CA",
        color:"#363062",
        padding:"1%",
    },
    link:{
        color:"black",
        textDecoration:"none",
        padding: "1%",
        fontSize: "20px",
        '&:hover': {
            backgroundColor: "#4D4C7D",
            color:"#E9D5CA",
            borderRadius: "50%",
          },
    },

})

export default useStyles;