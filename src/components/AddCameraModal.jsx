import {React, Fragment, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreatableAutoComplete from './CreatableAutoComplete'
import {postToAPI} from '../utils/postToAPI.js'



export default function AddCameraModal({setRows}) { 
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
    console.log(cameraName?.title)
    console.log(manufacturerName?.title)
    console.log(lensMount?.title)
    const data = {
      name: cameraName?.title,
      lens_mount: { name: manufacturerName?.title},
      manufacturer: { name: lensMount?.title},
    };
    // TODO: add error handling
    console.log('adding a new row to the current grid')
    const response = postToAPI('cameras', data)

    response.then(function(result) {
      const newRow = {
        "uuid": result.data.uuid,
        "id": result.data.uuid,
        "name": result.data.name,
        "lens_mount": result.data.lens_mount.name,
        "manufacturer_name": result.data.manufacturer.name 

      }
      setRows((oldRows) => [{ ...newRow,  isNew: true }, ...oldRows]);
      console.log(newRow)
   })
    
    setOpen(false);
  };

  const cameraResponse = [
    { name: 'Pentax LX', uuid: 1994, "manufacturer": {"name": "Pentax"}, "lens_mount": "K mount" },
    { name: 'Yashica FX3', uuid: 1972,  "manufacturer": {"name": "Yashica"}, "lens_mount": "C/Y" },
    { name: 'Minolta Mini', uuid: 1974,  "manufacturer": {"name": "Minolta"}, "lens_mount": "MD" },
    { name: 'Contax Quartz 139', uuid: 2008,  "manufacturer": {"name": "contax"}, "lens_mount": "C/Y" }
  ]

  const manufacturerList = cameraResponse.map(v => ({...v, title: v.manufacturer.name}))
  const lensMountList = cameraResponse.map(v => ({...v, title: v.lens_mount}))
  

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
