import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './index';

export default {
  title: 'Molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = () => <Header />;
