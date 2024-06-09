import React, {useState} from 'react';
import useDrivePicker from 'react-google-drive-picker'

const GoogleDrivePickerButton = () => {

    // Lets you open up google drive and view/upload files


// Client ID and API key from the Developer Console
const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
const [openPicker, authResponse] = useDrivePicker();  
const [embedURL, setEmbedURL] = useState(null)

const handleOpenPicker = () => {
  openPicker({
    clientId: CLIENT_ID,
    setParentFolder: "1dySA_8P6kwgc6hyh_h_lr2LUjmUy-AIf", // parent folder for film 
    developerKey: API_KEY,
    viewId: "DOCS_IMAGES",
    // token: token, // pass oauth token in case you already have one
    showUploadView: true,
    showUploadFolders: true,
    supportDrives: true,
    multiselect: true,
    setIncludeFolders: true,
    // customViews: customViewsArray, // custom view
    callbackFunction: (data) => {
      if (data.action === 'cancel') {
        console.log('User clicked cancel/close button')
      }
      // console.log(authResponse)
      // console.log(data)
      const extracted = data?.docs?.[0]?.embedUrl
      setEmbedURL(extracted)

    },
  })
}



  return (
   <div style={{    display: 'flex', alignItems: 'center', flexDirection: 'column'}}>    
      <button onClick={() => handleOpenPicker()}>Open Google Drive to View Photos</button>
      {embedURL && (<iframe src={embedURL} title='GDrive Iframe'/> )}
   </div>
   
  );
};

export default GoogleDrivePickerButton;
