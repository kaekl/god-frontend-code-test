import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ProductItemType } from '@/shared-types';

import { ProductCarousel } from './index';

const productItemsData: ProductItemType[] = [
  {
    id: 'xc90-recharge',
    modelName: 'XC90 Recharge',
    bodyType: 'suv',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/xc90_recharge.jpg',
  },
  {
    id: 'xc60-recharge',
    modelName: 'XC60 Recharge',
    bodyType: 'suv',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/xc60_recharge.jpg',
  },
  {
    id: 'xc40-recharge',
    modelName: 'XC40 Recharge',
    bodyType: 'suv',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/xc40_recharge.jpg',
  },
  {
    id: 'xc40-bev',
    modelName: 'XC40 Recharge',
    bodyType: 'suv',
    modelType: 'pure electric',
    imageUrl: '/images/xc40_bev.jpg',
  },
  {
    id: 'v90-recharge',
    modelName: 'V90 Recharge',
    bodyType: 'estate',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/v90_recharge.jpg',
  },
  {
    id: 'v60-recharge',
    modelName: 'V60 Recharge',
    bodyType: 'estate',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/v60_recharge.jpg',
  },
];

export default {
  title: 'Organisms/ProductCarousel',
  component: ProductCarousel,
} as ComponentMeta<typeof ProductCarousel>;

const Template: ComponentStory<typeof ProductCarousel> = (args) => (
  <ProductCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  productItems: productItemsData,
};
