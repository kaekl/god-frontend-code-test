import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProductImage } from './index';

export default {
  title: 'Atoms/ProductImage',
  component: ProductImage,
} as ComponentMeta<typeof ProductImage>;

const Template: ComponentStory<typeof ProductImage> = (args) => (
  <ProductImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: '/images/xc60_recharge.jpg',
  modelName: 'XC90 Recharge',
};
