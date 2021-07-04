import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    radioGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-10px',
    },
    button: {
        marginTop: '20px',
        background: 'hsl(247, 69%, 61%);',
        color: '#fff',
        width: '100%'
    },
    form: {
      width: '100%',
      padding: '1px 5px'
    },
    date: {
        paddingTop: '20px',
        marginLeft: '20px',
        marginTop: '-20px',
        width: '170px'
    },
    
}))