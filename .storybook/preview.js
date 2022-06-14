import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as NextImage from "next/image";
import { StyleProvider, ThemePicker } from "vcc-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
}

// Need to wrap all stories with StyleProvider and ThemePicker to use UI-components from 'vcc-ui'
export const decorators = [
  (Story) => (
    <StyleProvider>
      <ThemePicker variant="light">
        <Story />
      </ThemePicker>
    </StyleProvider>
  ),
];

// De-optimizing Next Image so that it can be used in stories 
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

/* Could have set a theme for all stories, e.g. 
export const argTypes = { theme: { control: 'select', options: ['light', 'dark'], defaultValue: 'light' } }; */