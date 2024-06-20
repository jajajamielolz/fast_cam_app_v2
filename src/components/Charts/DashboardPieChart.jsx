import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { PieChart } from '@mui/x-charts/PieChart';

const useStyles = makeStyles(() => ({
  mainContainer: {
    marginRight: '20px',
    // height: '200px',
    // width: '200px',
    // height: props => props.previewSize ? '200px' : null,
    // width: props => props.previewSize ? '200px' : null,
    // cursor: props => props.previewSize ? 'pointer' : null,
    borderColor: 'rgba(194,201,209, 0.5)',
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




  return (
<div className={classes.mainContainer}>
<div className={classes.headerContainer}>
  {titleText}
</div>
    <PieChart
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
