import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductTitle } from './index';

export default {
  title: 'Atoms/ProductTitle',
  component: ProductTitle,
} as ComponentMeta<typeof ProductTitle>;

const Template: ComponentStory<typeof ProductTitle> = (args) => (
  <ProductTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bodyType: 'SUV',
  modelName: 'XC60 Recharge',
  modelType: 'plug-in hybrid',
};
