import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { BORDER_COLOR, BUTTON_COLOR, ACTIVATED_BUTTON_COLOR } from '../../lib/styles';

const useStyles = makeStyles((props) => ({
  filterContainer: {
    display: 'flex',
    marginLeft: '20px',
    cursor: 'pointer',
    background: props => props.activeFilterApplied ? ACTIVATED_BUTTON_COLOR : BUTTON_COLOR,
    borderColor: BORDER_COLOR,
    border: '2px solid',
    borderRadius: '30px',
    paddingLeft: '15px',
    paddingRight: '5px',
    justifyContent:'center',
  },
  filterOption: {
    borderColor: BORDER_COLOR,
    border: '2px solid',
    borderRadius: '30px',
    paddingLeft: '8px',
    justifyContent:'center',
    cursor: 'pointer',

  },
  filterOptionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    height: 'fit-content',
    maxWidth: '300px',
    borderRadius: '16px',
    background: 'rgba(247, 247, 247, 1)',
    borderColor: BORDER_COLOR,
    border: '2px solid',
    zIndex: 1,
    position: 'absolute',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  },
  xButton: {
    cursor: 'pointer',
    visibility: props => props.activeFilterApplied ? 'visible' : 'hidden',
    background: ACTIVATED_BUTTON_COLOR,
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  }
}));

const CarouselFilter = ({setAddedFilter, filterTitle, filterOptions, filterType, addedFilter}) => {

  const activeFilterApplied = addedFilter?.filterTitle === filterTitle
  const classes = useStyles({activeFilterApplied});

  const [showFilterOptions, setShowFilterOptions] = useState(null);

  const setFilterFavorites = () => {
    setAddedFilter({field: 'Favorites', filterTitle: filterTitle, name: filterTitle})
  }

  const handleOnClickFilter = () => {
    if (filterTitle ==="Favorites"){
      addedFilter ? setAddedFilter(null) : setFilterFavorites()

    } else {
      setShowFilterOptions(showFilterOptions ? false : true)
    }
  };

  const handleOnClickRemoveFilters = (event) => {
    setShowFilterOptions(false)
    setAddedFilter(null)
  };

  const handleOnClickFilterOption = (event) => {
    setShowFilterOptions(false)
    setAddedFilter({field: event.target.lang, name: event.target.name, filterType: filterType, filterTitle: filterTitle})
  };

  const filterOptionRows =
  filterOptions?.length > 0
    ? filterOptions.map((option) => {
        return (
          <button className={classes.filterOption} onClick={handleOnClickFilterOption} key={option.uuid} name={option.name} lang={option.field}>
            {option.name}
          </button>
        );
      })
    : [];


  
  return (
    <div>
      <div className={classes.filterContainer} onClick={activeFilterApplied ? handleOnClickRemoveFilters : handleOnClickFilter}>
        {activeFilterApplied ? addedFilter.name : filterTitle}
        <button className={classes.xButton} onClick={handleOnClickRemoveFilters }  > x </button>
      </div>
      {showFilterOptions && (
        <div className={classes.filterOptionsContainer} >
          {filterOptionRows}
        </div>
      )}
    </div>
  );
};

export default CarouselFilter;
