import React from 'react';
import { useTheme, Flex, View, Logo } from 'vcc-ui';
import { useIsDesktop } from '@/hooks';

export const Header: React.FC = () => {
  const isDesktop = useIsDesktop();
  const theme = useTheme();

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
      <View extend={{ paddingLeft: 22 }}>
        <Logo alt='Volvo logo' height={isDesktop ? 16 : 8} />
      </View>
    </Flex>
  );
};
