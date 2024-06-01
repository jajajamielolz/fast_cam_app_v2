import React from 'react';


import CameraDisplayCard from './CameraDisplayCard';

export default {
  title: 'Components/Camera/CameraDisplayCard',
  component: CameraDisplayCard,
};

const CameraDisplayCardTemplate = (args) => {
  return (

        <CameraDisplayCard {...args}></CameraDisplayCard>

  );
};


export const DisplayWithCustomImage = CameraDisplayCardTemplate.bind({});
DisplayWithCustomImage.args = {
  manufacturer: 'Contax',
  modelName: '139 q', 
  lensMount: 'C/Y Mount'
};

export const DisplayWithDefaultImage = CameraDisplayCardTemplate.bind({});
DisplayWithDefaultImage.args = {
  manufacturer: 'Contax',
  modelName: 'Fake Model Name', 
  lensMount: 'C/Y Mount'
};
