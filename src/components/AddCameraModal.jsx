import {React, Fragment, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreatableAutoComplete from './CreatableAutoComplete'
import {postToAPI} from '../utils/postToAPI.js'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';




export default function AddCameraModal({setCameras, initialCameras, setUpdate}) { 


  const [open, setOpen] = useState(false);
  const [cameraName, setCameraName] = useState(null);
  const [lensMount, setLensMount] = useState(null);
  const [manufacturerName, setManufacturerName] = useState(null);
  const [manualModeBool, setManualModeBool] = useState(null);
  const [shutterSpeedMin, setShutterSpeedMin] = useState(null);
  const [shutterSpeedMax, setShutterSpeedMax] = useState(null);
  const [shutterPriority, setShutterPriority] = useState(null);
  const [aperturePriority, setAperturePriority] = useState(null);
  const [bulbMode, setBulbMode] = useState(null);
  const [batteryRequired, setBatteryRequired] = useState(null);



  const shutterSpeeds=[{"title": "15"}, {"title": "8"}, {"title": "4"}, {"title": "2"}, {"title": "1"}, {"title": "1/2"}, {"title": "1/4"}, {"title": "1/8"}, {"title": "1/15"}, {"title": "1/30"}, {"title": "1/60"}, {"title": "1/125"}, {"title": "1/250"}, {"title": "1/500"}, {"title": "1/1000"}, {"title": "1/2000" }]
  const shutterSpeedsReversed = [...shutterSpeeds].reverse();

  const trueFalseOptions = [{"title": "true"}, {"title": "false"}]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: cameraName?.title,
      manufacturer: { name: manufacturerName?.title},
      lens_mount: { name: lensMount?.title},
      min_shutter_speed: shutterSpeedMin? eval(shutterSpeedMin.title) : null,
      max_shutter_speed:  shutterSpeedMax? eval(shutterSpeedMax.title) : null, 
      shutter_priority: shutterPriority?.title,
      aperture_priority: aperturePriority?.title,
      bulb_mode: bulbMode?.title,
      manual: manualModeBool?.title,
      battery_required: batteryRequired?.title,

    };
    console.log(data)
    const response = postToAPI('cameras', data)

    response.then(function(result) {
      const newRow = {
        "uuid": result.data.uuid,
        "id": result.data.uuid,
        "name": result.data.name,
        "lens_mount": result.data.lens_mount.name,
        "manufacturer_name": result.data.manufacturer.name 

      }
      setCameras((oldRows) => [{ ...newRow,  isNew: true }, ...oldRows]);
      setUpdate(true)
   })
    setOpen(false);
  };


  const manufacturerList = [...new Set(initialCameras.map(camera => camera.manufacturer_name))].map(title => ({title: title}))
  const lensMountList = [...new Set(initialCameras.map(camera => camera.lens_mount))].map(title => ({title: title}))
  
  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Cameraz
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'lg'} >
        <DialogTitle>Add Camera</DialogTitle>
        <DialogContent>

    {/* Row one */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs>
        <CreatableAutoComplete
      availableOptions={manufacturerList}
      value={manufacturerName}
      setValue={setManufacturerName}
      fieldTitle={"Manufacturer"}
      />
        </Grid>
        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={null}
      value={cameraName}
      setValue={setCameraName}
      fieldTitle={"Name"}
      />
              </Grid>
        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={lensMountList}
      value={lensMount}
      setValue={setLensMount}
      fieldTitle={"Lens Mount"}
      />
        </Grid>
      </Grid>
    </Box>

    {/* Row two */}
    <Box sx={{ flexGrow: 1  }}>
      <Grid container spacing={1}>
      <Grid item xs>
        <CreatableAutoComplete
      availableOptions={trueFalseOptions}
      value={manualModeBool}
      setValue={setManualModeBool}
      fieldTitle={"Manual Mode"}
      disableAdd={true}
      />
        </Grid>
        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={shutterSpeeds}
      value={shutterSpeedMin}
      setValue={setShutterSpeedMin}
      fieldTitle={"Min Shutter Speed"}
      />
              </Grid>
      



        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={shutterSpeedsReversed}
      value={shutterSpeedMax}
      setValue={setShutterSpeedMax}
      fieldTitle={"Max Shutter Speed"}
      />
        </Grid>
        
      </Grid>
      </Box>


          {/* Row Three */}


          <Box sx={{ flexGrow: 1  }}>
      <Grid container spacing={1}>
      <Grid item xs>
        <CreatableAutoComplete
      availableOptions={trueFalseOptions}
      value={shutterPriority}
      setValue={setShutterPriority}
      fieldTitle={"Shutter Priority"}
      disableAdd={true}
      />
        </Grid>

        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={trueFalseOptions}
      value={aperturePriority}
      setValue={setAperturePriority}
      fieldTitle={"Aperture Priority"}
      disableAdd={true}
      />
        </Grid>



        
      </Grid>
      </Box>


                {/* Row Four */}


                <Box sx={{ flexGrow: 1  }}>
      <Grid container spacing={1}>

      
        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={trueFalseOptions}
      value={bulbMode}
      setValue={setBulbMode}
      fieldTitle={"Bulb Mode"}
      disableAdd={true}
      />
        </Grid>

        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={trueFalseOptions}
      value={batteryRequired}
      setValue={setBatteryRequired}
      fieldTitle={"Battery Required"}
      disableAdd={true}
      />
        </Grid>


        
      </Grid>
      </Box>


            
            




        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
