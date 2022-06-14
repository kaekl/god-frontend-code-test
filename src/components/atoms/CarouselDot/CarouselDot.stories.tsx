import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CarouselDot } from './index';

export default {
  title: 'Atoms/CarouselDot',
  component: CarouselDot,
} as ComponentMeta<typeof CarouselDot>;

const Template: ComponentStory<typeof CarouselDot> = (args) => (
  <CarouselDot {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  onClick: () => {},
  active: true,
};
