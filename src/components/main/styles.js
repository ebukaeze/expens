import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *':{
            marginTop: theme.spacing(2),
        },
    },
  media:{
      height: 0,
      paddingTop: "56.25%", //16:9
  },
  expand: {
      transform: 'rotate(0deg)',
      marginLeft: "auto",
      transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
      }),
  },
  expandOpen: {
      transform: 'rotate(180deg)',
  },
  cartContent: {
      paddingTop: 0,
  },
   Divider: {
       margin: "5px, 0",
       boxShadow: " 0 10px 5px rgba(0, 0, 0, 0.25)"
   }
}));