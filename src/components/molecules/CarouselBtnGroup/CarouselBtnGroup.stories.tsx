import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CarouselBtnGroup } from './index';

export default {
  title: 'Molecules/CarouselBtnGroup',
  component: CarouselBtnGroup,
} as ComponentMeta<typeof CarouselBtnGroup>;

const Template: ComponentStory<typeof CarouselBtnGroup> = (args) => (
  <CarouselBtnGroup {...args} />
);

const carouselInternalState = {
  itemWidth: 490,
  containerWidth: 1961,
  slidesToShow: 4,
  currentSlide: 1,
  totalItems: 6,
  domLoaded: true,
  transform: -0,
};

export const Default = Template.bind({});
Default.args = {
  next: () => {},
  previous: () => {},
  carouselState: carouselInternalState,
};
