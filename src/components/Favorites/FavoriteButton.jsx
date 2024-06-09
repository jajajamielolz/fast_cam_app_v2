import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ReactComponent as CamFavIcon} from '../../static/icons/CamFavIcon.svg'
import PropTypes from 'prop-types';
import { patchToAPI } from '../../utils/patchToAPI';
import Tooltip from "react-simple-tooltip"

const useStyles = makeStyles(() => ({
  iconButton: {
    height: '75%',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: props => props.favorited ? 'rgba(255, 244, 0, 1)' : null,
    fill: props => props.favorited ? 'black' : 'rgba(194,201,209, 0.5)',
    borderColor: 'rgba(194,201,209, 0.5)',
    border: '2px solid',
    borderRadius: '30px',
    paddingTop: '3px',
    
  },
  iconContainer: {
    marginLeft: '10px',
    width: '20px',
    height: '20px',
  },
  toolTipContent: {
    width:'75px'
  }

}));


const FavoriteButton = ({cameraUUID, isFavorited}) => {
  const [favorited, setFavorited] = useState(isFavorited);

  const classes = useStyles({favorited});

  const hoverText = favorited ? 'Select to remove from favorites' : 'Select to add to favorites'
  const handleClickButton = (event) => {
    event.stopPropagation()

    // USING SELF TIMER BOOL AS FAV BC LAZY
    const data = {
        self_timer: favorited ? false : true,
      };
  
      patchToAPI(`cameras`, cameraUUID, data)
      setFavorited(favorited ? false : true)
  };

  const ToolTipContent = <div className={classes.toolTipContent}>{hoverText}</div>


  return (
    <Tooltip content={ToolTipContent} className={classes.iconContainer} fontSize='8px' placement='right' radius={25} >
    <CamFavIcon className={classes.iconButton} onClick={handleClickButton}/>
    </Tooltip>

  );
};

FavoriteButton.propTypes = {
    cameraUUID: PropTypes.string,
    isFavorited: PropTypes.bool
};

export default FavoriteButton;
