import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import { BORDER_COLOR, SECONDARY_BACKGROUND_COLOR, PRIMARY_BACKGROUND_COLOR, DISABLED_COLOR, HEAVY_COLOR, DARKER_DISABLED_COLOR, DARKER_ACTIVATED_COLOR,ACCENT_COLOR, ACTIVATED_COLOR } from '../../lib/Styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    background: SECONDARY_BACKGROUND_COLOR,
    marginRight: '20px',
    marginBottom: '10px',
    // height: '200px',
    // width: '200px',
    // height: props => props.previewSize ? '200px' : null,
    // width: props => props.previewSize ? '200px' : null,
    // cursor: props => props.previewSize ? 'pointer' : null,
    borderColor: BORDER_COLOR,
    border: '2px solid',
    // backgroundColor: 'white',
    // padding: '16px',
    borderRadius: '20px',
    // gap: '12px',
    // display: 'flex',
    // flexDirection: "row",
    // justifyContent: "center",
    // textAlign: 'center',
    // alignItems: 'center'
  },
  headerContainer: {
    marginTop:'10px',
    textAlign: 'center',
  },
}));


const DashboardPieChart = ({itemsList, titleText}) => {
  const classes = useStyles({});

  // A unique set of manufacturers
  var uniqueManufacturers = itemsList.reduce((unique, o) => {
    if(!unique.some(obj => obj?.manufacturer?.uuid === o?.manufacturer?.uuid )) {
      unique.push(o);
    }
    return unique;
},[]);

// Function to count Occurrence of manufacturer uuid
function countManufacturerUUID(uuid, items) {
  var occurs = 0;
  
  for (var i=0; i<items.length; i++) {
    if ( 'uuid' in items[i] && items[i]?.manufacturer?.uuid === uuid ) occurs++;
  }

  return occurs;
}

  // map over unique, count occurrences in total, format data for chart
  const manuFacturerData = uniqueManufacturers?.map(v => ({
    id: v?.manufacturer?.uuid, 
    label: v?.manufacturer?.name, 
    value: countManufacturerUUID(v?.manufacturer?.uuid, itemsList)
  }))

  // sort data
  manuFacturerData.sort(function(a, b) { 
    return b.value - a.value;
})
const palette = [ACTIVATED_COLOR, DISABLED_COLOR, HEAVY_COLOR, DARKER_DISABLED_COLOR, DARKER_ACTIVATED_COLOR, ACCENT_COLOR, PRIMARY_BACKGROUND_COLOR];




  return (
<div className={classes.mainContainer}>
<div className={classes.headerContainer}>
  {titleText}
</div>
    <PieChart
    colors={palette}
  series={[
    {
      data: manuFacturerData.slice(0,10),
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: 0,
      endAngle: 360,
      cx: 150,
      cy: 150,
    },
  ]}
  width={400}
  height={350}

/>
</div>
  );
};

export default DashboardPieChart;
