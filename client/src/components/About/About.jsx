import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './About.scss'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function About () {
  const classes = useStyles();
  return (
    <main class="main">
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{margin: "0 auto"}}>
        TalentWyre
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        
      Headhunt your talents quicker, smarter, without bias and limitations of personal networks.
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" paragraph>
      TalentWyre is the go-to site for people in the film industry, both talents, representation
      and filmmakers/scouts. The site has a user-friendly interface with a built-in search
      engine categorizing talents in different levels, occupation and countries. It will be the only
      complete “platform” on the market that will serve as a unique, fully searchable database
      including all different talents (both in-front and behind the camera) in the film industry,
      talents with or without representation. It will not only facilitate and save money for
      filmmakers and casting directors, but also open up a market for talents already established
      in the industry with or without representation and help up-and-coming talents to be
      discovered.

      <Typography variant="body2" align="center" color="textSecondary" paragraph>
      TalentWyre is a website and search database for people in the film industry. A modern
      way of finding your talent, whether it’s behind or in front of the camera, cast and
      filmmaker.
      </Typography>

      </Typography>
    </Container>
    </main>
  )
}
export default About
