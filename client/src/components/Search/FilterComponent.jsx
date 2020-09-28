import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from './DatePicker';
import Grid from "@material-ui/core/Grid";
import ExperienceBox from './ExperienceBox'
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';  
import './FilterComponent.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    '& > * + *': {
        marginTop: theme.spacing(2),
      },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));

export default function FilterComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {primary, appearance, skills, experience, measurements, handleSubmit, searchCredit, handleCreditChange} = props;
  return (
    <Card className={`${classes.root} mx-8 filtercomponent`}>
      <CardHeader
        action={
          <Tooltip title="Filter Your Results: (A->Z) or (Z->A)" placement="top-start" style={{ fontSize: 18 }}>
            
            <Button className="filter__button"><FilterListIcon /></Button></Tooltip>
        }
        title="Filter Results"
        className="card__title"
      ></CardHeader>
      <CardContent>
        {/* <DatePicker/> */}
        <ExperienceBox def={searchCredit} onChange={handleCreditChange} />
        <div className='search-main'>
          {[...primary]}
        </div>
        {!expanded ? <button onClick={handleSubmit} className="searchengine__button">Search</button> : null}
        <h3>Appearance</h3>
        <div className='search-appearance'>
          {[...appearance]}
        </div>
      </CardContent>
      {!expanded ? <button onClick={handleSubmit} className="searchengine__button">Search</button> : null}
      <Grid container direction="column" alignItems="center">
    <Typography gutterBottom>{!expanded ? <p>More Filters</p> : <p>Close More Filters</p>}</Typography>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          }) + ' expand__button'}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        
        </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>Skills</h3>
          <div className={classes.root + ' search-skills'}>
            {[...skills]}
          </div>
          <h3>Experience</h3>
          <div className='search-experience'>
            {[...experience]}
          </div>
          <h3>Measurements</h3>
          <div className='search-measurements'>
            {[...measurements]}
          </div>
        </CardContent>
        {expanded ? <button onClick={handleSubmit} className="searchengine__button">Search</button> : null}
      </Collapse>
    </Card>
  );
}