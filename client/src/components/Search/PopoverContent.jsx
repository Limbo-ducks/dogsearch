import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DescriptionIcon from '@material-ui/icons/Description';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import './PopoverContent.scss'

export const CheckboxListSecondary = () => {
    const [added, setAdded] = React.useState([false, false, false, false]);
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            maxWidth: 350,
            backgroundColor: theme.palette.background.paper,
        },
        }));
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleListItemClick = i => {
        const newAdded = Array.from(added, (value, idx) => idx === i ? true : value);
        setAdded(newAdded);
    };

    return (
        <>
        <List dense className={classes.root}>
        {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
            <ListItem key={value} button onClick={() => handleListItemClick(value)} className="container">
                    <ListItemAvatar>
                    <DescriptionIcon />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`Project ${value + 1}`} />
                    {added[value] ? <ListItemSecondaryAction><Tooltip title={`View and Edit Project ${value + 1}`} placement="top-end">
                        <Button size="small" className="button" /* ADD ONCLICK HERE TO STOP PROPAGATION & TAKE USER TO PROFILE*/><LaunchIcon fontSize="small" /></Button>
                        </Tooltip>
                    </ListItemSecondaryAction> : null }
                <div class={added[value] ? 'overlay hidden' : 'overlay'}>
                    <div class="text">Add to List</div>
                </div>
            </ListItem>
            );
        })}
        </List>
        </>
    );
}

const PopoverContent = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(1),
            width: '200px',
            height: theme.spacing(16),
          },
        },
      }));
    const classes = useStyles();
    return (
        <>
        <div>
        <Typography align='left' className="popover__title">Add to My Shortlists</Typography>
        <div className={classes.root   + ' popover__list'}>
            <Paper elevation={0} className="popover__paper">
                <CheckboxListSecondary></CheckboxListSecondary>
            </Paper>
            
        </div>
        <ListItem key="add" button 
        className="new__item__button">
          <ListItemText id="add__text" inset="true">New List</ListItemText>
        </ListItem>
        </div>
        </>
    )
}

export default PopoverContent
