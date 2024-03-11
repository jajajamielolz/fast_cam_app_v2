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




export default function AddLensModal({setLenses, initialLenses, setUpdate}) { 


  const [open, setOpen] = useState(false);
  const [lensName, setLensName] = useState(null);
  const [lensMount, setLensMount] = useState(null);
  const [manufacturerName, setManufacturerName] = useState(null);
  const [apertureValueMin, setApertureValuesMin] = useState(null);
  const [apertureValueMax, setShutterSpeedMax] = useState(null);
  const [focalLengthMin, setFocalLengthMin] = useState(null);



  const apertureValues=[{"title": "1.2"}, {"title": "1.4"}, {"title": "1.7"}, {"title": "1.8"}, {"title": "1.9"}, {"title": "2.0"}, {"title": "2.8"}, {"title": "3.5"}, {"title": "4.0"}, {"title": "5.6"}, {"title": "8.0"}, {"title": "11.0"}, {"title": "16.0"}, {"title": "22"}]
  const defaultFocalLengths=[{"title": "28"}, {"title": "35"}, {"title": "50"}, {"title": "55"}, {"title": "135"}, {"title": "200"}]
  const apertureValuesReversed = [...apertureValues].reverse();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: lensName?.title,
      manufacturer: { name: manufacturerName?.title},
      lens_mount: { name: lensMount?.title},
      min_aperture: apertureValueMin? eval(apertureValueMin.title) : null,
      max_aperture:  apertureValueMax? eval(apertureValueMax.title) : null, 
      min_focal_length: focalLengthMin? eval(focalLengthMin.title) : null,
    };
    console.log(data)
    const response = postToAPI('lenses', data)

    response.then(function(result) {
      const newRow = {
        "uuid": result.data.uuid,
        "id": result.data.uuid,
        "name": result.data.name,
        "lens_mount": result.data.lens_mount.name,
        "manufacturer_name": result.data.manufacturer.name,
        "min_focal_length": result.data.min_focal_length,

      }
      setLenses((oldRows) => [{ ...newRow,  isNew: true }, ...oldRows]);
      setUpdate(true)
   })
    setOpen(false);
  };

 
  const manufacturerList = initialLenses ? [...new Set(initialLenses.map(lens => lens.manufacturer_name))].map(title => ({title: title})) : []
  const lensMountList =  initialLenses ? [...new Set(initialLenses.map(lens => lens.lens_mount))].map(title => ({title: title})) : []
  
  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Lensz
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'lg'} >
        <DialogTitle>Add Lens</DialogTitle>
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
      value={lensName}
      setValue={setLensName}
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
      availableOptions={apertureValuesReversed}
      value={apertureValueMin}
      setValue={setApertureValuesMin}
      fieldTitle={"Min Aperture"}
      />
              </Grid>
      

              <Grid item xs>
        <CreatableAutoComplete
      availableOptions={apertureValues}
      value={apertureValueMax}
      setValue={setShutterSpeedMax}
      fieldTitle={"Max Aperture"}
      />
        </Grid>

        <Grid item xs>
        <CreatableAutoComplete
      availableOptions={defaultFocalLengths}
      value={focalLengthMin}
      setValue={setFocalLengthMin}
      fieldTitle={"Focal Length"}
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
