import React from 'react';
import { AppProps } from 'next/app';
import { StyleProvider, ThemePicker, View } from 'vcc-ui';
import { Header } from '@/components/molecules';

const themeVariant = 'light'; // or 'dark'
const directionVariant = 'ltr'; // or 'rtl'

function VolvoCarApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant={themeVariant} direction={directionVariant}>
          <View dir={directionVariant}>
            <Header />
            <Component {...pageProps} />
          </View>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default VolvoCarApp;
