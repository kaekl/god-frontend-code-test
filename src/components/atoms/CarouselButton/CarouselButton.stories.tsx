import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CarouselButton } from './index';

export default {
  title: 'Atoms/CarouselButton',
  component: CarouselButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CarouselButton>;

const Template: ComponentStory<typeof CarouselButton> = (args) => (
  <CarouselButton {...args} />
);

export const RightArrow = Template.bind({});
RightArrow.args = {
  direction: 'right',
};

export const LeftArrow = Template.bind({});
LeftArrow.args = {
  direction: 'left',
};
