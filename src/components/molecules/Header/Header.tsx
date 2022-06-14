import React from 'react';
import { useTheme, Flex, View, Logo } from 'vcc-ui';
import { useDetectDevice } from '@/hooks';

interface HeaderProps {
  display?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ display = true }) => {
  const isDesktop = useDetectDevice();
  const theme = useTheme();

  if (!display) {
    return null;
  }

  return (
    <Flex
      extend={{
        alignItems: 'start',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: theme.color.background.secondary,
        height: 64,
      }}
    >
      <View extend={{ paddingLeft: 12 }}>
        <Logo alt='Volvo logo' height={isDesktop ? 16 : 8} />
      </View>
    </Flex>
  );
};
