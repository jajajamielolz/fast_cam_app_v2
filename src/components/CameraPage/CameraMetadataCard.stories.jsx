import React from 'react';


import CameraMetadataCard from './CameraMetadataCard';

export default {
  title: 'Components/Camera/CameraMetadataCard',
  component: CameraMetadataCard,
};

const CameraDisplayCardTemplate = (args) => {
  return (

        <CameraMetadataCard {...args}></CameraMetadataCard>

  );
};


export const Default = CameraDisplayCardTemplate.bind({});
Default.args = {
  minShutterSpeed: '2', 
  maxShutterSpeed: '1/1000',
 hasAperturePriority: true,
 hasShutterPriority: false,
 hasBulbMode: true,
 requiresBattery: true
};
