import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  filterContainer: {
    marginLeft: '20px',
    cursor: 'pointer',
    // backgroundColor: props => props.filterActive ? 'rgba(255, 244, 0, 1)' : null,
    borderColor: 'rgba(194,201,209, 0.5)',
    border: '2px solid',
    borderRadius: '30px',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  filterOptionsContainer: {
    width: '100%',
    height: '100%',
    borderColor: 'rgba(194,201,209, 0.5)',
    border: '2px solid',
    zIndex: 1,
    position: 'relative'
  },
}));

const CarouselFilter = ({setAddedFilter, filterTitle, filterOptions, filterType}) => {
  const classes = useStyles();

  const [showFilterOptions, setShowFilterOptions] = useState(null);



  const handleOnClickFilter = () => {
    setShowFilterOptions(true)
  };

  const handleOnClickFilterOption = (event) => {
    setShowFilterOptions(false)
    setAddedFilter({field: event.target.lang, name: event.target.name, filterType: filterType})
  };

  const filterOptionRows =
  filterOptions?.length > 0
    ? filterOptions.map((option) => {
        return (
          <button onClick={handleOnClickFilterOption} key={option.uuid} name={option.name} lang={option.field}>
            {option.name}
          </button>
        );
      })
    : [];


  

  return (
    <div>
      <div className={classes.filterContainer} onClick={handleOnClickFilter}>
        {filterTitle}
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
