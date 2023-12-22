import {React, Fragment, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreatableAutoComplete from './CreatableAutoComplete'
import {postToAPI} from '../utils/postToAPI.js'



export default function AddCameraModal({setCameras, initialCameras, setUpdate}) { 
  const [open, setOpen] = useState(false);
  const [cameraName, setCameraName] = useState(null);
  const [lensMount, setLensMount] = useState(null);
  const [manufacturerName, setManufacturerName] = useState(null);


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
    };
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Camera</DialogTitle>
        <DialogContent>



          <CreatableAutoComplete
      availableOptions={null}
      value={cameraName}
      setValue={setCameraName}
      fieldTitle={"Name"}
      />
            <CreatableAutoComplete
      availableOptions={manufacturerList}
      value={manufacturerName}
      setValue={setManufacturerName}
      fieldTitle={"Manufacturer"}
      />
            <CreatableAutoComplete
      availableOptions={lensMountList}
      value={lensMount}
      setValue={setLensMount}
      fieldTitle={"Lens Mount"}
      />




        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
