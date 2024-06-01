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

const DEFAULT_ARGS={
  manufacturer: 'Contax',
  modelName: '139 q', 
  lensMount: 'C/Y Mount'
}

export const DisplayWithCustomImage = CameraDisplayCardTemplate.bind({});
DisplayWithCustomImage.args = {
  ...DEFAULT_ARGS,
};

export const DisplayWithDefaultImage = CameraDisplayCardTemplate.bind({});
DisplayWithDefaultImage.args = {
  ...DEFAULT_ARGS,
  modelName: 'Fake Model Name', 
};
