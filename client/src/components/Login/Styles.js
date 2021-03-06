import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      margin: '50px 0',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/collection/9933727)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
      marginTop: theme.spacing(1),
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