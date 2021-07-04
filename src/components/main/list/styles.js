import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
avatarIncome: {
    backgroundColor: "green",
},

avatarExpense: {
    backgroundColor: "red",
},

list: {
    overflowY: "scroll",
    maxHeight: "100px",
    backgroundColor: "#ffe",
    transition: "0.3s"

}
}));