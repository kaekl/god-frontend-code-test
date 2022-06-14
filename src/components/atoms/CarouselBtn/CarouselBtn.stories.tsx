import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CarouselBtn } from './index';

export default {
  title: 'Atoms/CarouselArrowBtn',
  component: CarouselBtn,
} as ComponentMeta<typeof CarouselBtn>;

const Template: ComponentStory<typeof CarouselBtn> = (args) => (
  <CarouselBtn {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const LeftArrow = Template.bind({});
LeftArrow.args = {
  rotateLeft: true,
};
