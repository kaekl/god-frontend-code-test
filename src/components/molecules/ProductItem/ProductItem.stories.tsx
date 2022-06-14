import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ProductItemType } from '@/shared-types';

import { ProductItem } from './index';

const productItemData: ProductItemType = {
  id: 'xc90-recharge',
  modelName: 'XC90 Recharge',
  bodyType: 'suv',
  modelType: 'plug-in hybrid',
  imageUrl: '/images/xc90_recharge.jpg',
};

export default {
  title: 'Molecules/ProductItem',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  productItem: productItemData,
  displayLinks: true,
};
