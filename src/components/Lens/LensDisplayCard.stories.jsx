import React from 'react';


import LensDisplayCard from './LensDisplayCard';

export default {
  title: 'Components/Lens/LensDisplayCard',
  component: LensDisplayCard,
};

const LensDisplayCardTemplate = (args) => {
  return (

        <LensDisplayCard {...args}></LensDisplayCard>

  );
};

const DEFAULT_ARGS={
  manufacturer: 'Contax',
  modelName: 'planar',
  lensMount: 'C/Y Mount',
  focalLength: 50, 
  minAperture: 1.7, 
  maxAperture: 16
}

export const DisplayWithCustomImage = LensDisplayCardTemplate.bind({});
DisplayWithCustomImage.args = {...DEFAULT_ARGS};

export const HiddenMountInfo = LensDisplayCardTemplate.bind({});
HiddenMountInfo.args = {
  ...DEFAULT_ARGS,
  hideMount: true,

};

export const DisplayWithDefaultImage = LensDisplayCardTemplate.bind({});
DisplayWithDefaultImage.args = {
  ...DEFAULT_ARGS,
  modelName: 'Fake Model Name', 
};
