import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    google: {
      border: '1px solid #000',
      borderRadius: '3px',
      color: '#000',
      display: 'block',
      marginTop: '20px',
      padding: '6px',
      textAlign: 'center',
      textTransform: 'uppercase',
      transition: "all ease-in-out 0.3s",
      width: '100%',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: '#e1e1e1',
      }
    }
}));

export default useStyles