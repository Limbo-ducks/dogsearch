import React from 'react';
import './ProfileInfo.scss';
import Popover from '@material-ui/core/Popover';
import PopoverContent from '../Search/PopoverContent';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoIcon from '@material-ui/icons/Info';import AddIcon from '@material-ui/icons/Add';
import PetsIcon from '@material-ui/icons/Pets';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/Home';

import Blank from '../../assets/images/blank-profile-picture.png';
import HeaderBackground from '../../assets/images/background.jpg';
import { Tooltip } from '@material-ui/core';

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const ProfileInfo = ({data, viewCalendar, viewContact, viewProfile, viewCv}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'simple-popover' : undefined;

  const handleClick = event => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="info">
      <article className="info__header">
        <img src={HeaderBackground} alt="" className="info__header__banner"/>
        <img src={data.image ? `${data.image}` : `${Blank}`} alt="" className="info__header__profileimg"/>
        <button className="talentcard__bookmark" onClick={handleClick}>
          <Tooltip title="Add to shortlist" placement="top">
            <AddIcon className="talentcard__bookmark--click talentcard__bookmark--profile"/>
          </Tooltip>
        </button>
        <Popover
          id={id}
          className="popover"
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          placement='top-start'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <PopoverContent/>
      </Popover>
      </article>
      <article className="info__navigation">
        <Tooltip title="View Home" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><HomeIcon />
          </article>
        </Tooltip>
        <Tooltip title="View Gallery" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewCv(e.currentTarget)
            }}><PhotoLibraryIcon />
          </article>
        </Tooltip>
        <Tooltip title="View Videos" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewContact(e.currentTarget)
            }}><VideoLibraryIcon />
          </article>
        </Tooltip>
        {/* <Tooltip title="View Calendar" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewCalendar(e.currentTarget)
            }}><DateRangeIcon />
          </article>
        </Tooltip> */}
      </article>
      <article className="info__content">
        <h2 className="info__content__text"><PetsIcon/> 
        <i>{data.name === '' ? 'Unknown' : `${data.name}, ${data.breed}`}</i>
        </h2>
        <article className="info__content__attributes">
          <InfoIcon/>
          <article className="info__content__attributes__text">
            <h3 className="info__content__text"><b>Size:</b> {data.size}</h3>
            <h3 className="info__content__text"><b>Colour:</b> {upCaseFirst(data.color)}</h3>
            <h3 className="info__content__text"><b>Fur:</b> {data.fur}</h3>
            <h3 className="info__content__text"><b>Age:</b> {data.age} years</h3>
          </article>
        </article>
      </article>
      <article className="info__footer">
      <button className="info__footer__button">Adopt {data.name}!</button>
      </article>
    </section>
  )
}

export default ProfileInfo;
