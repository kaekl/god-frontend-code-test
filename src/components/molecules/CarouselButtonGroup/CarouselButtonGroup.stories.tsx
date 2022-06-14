import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CarouselButtonGroup } from './index';

const carouselInternalState = {
  itemWidth: 490,
  containerWidth: 1961,
  slidesToShow: 4,
  currentSlide: 1,
  totalItems: 6,
  domLoaded: true,
  transform: -0,
};

export default {
  title: 'Molecules/CarouselButtonGroup',
  component: CarouselButtonGroup,
} as ComponentMeta<typeof CarouselButtonGroup>;

const Template: ComponentStory<typeof CarouselButtonGroup> = (args) => (
  <CarouselButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  next: () => {},
  previous: () => {},
  carouselState: carouselInternalState,
};
