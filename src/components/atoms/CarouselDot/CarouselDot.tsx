import React from 'react';
import { DotProps } from 'react-multi-carousel';
import { useTheme, Flex, Block, Spacer } from 'vcc-ui';

interface CarouselDotProps extends DotProps {
  size?: number;
}

export const CarouselDot: React.FC<CarouselDotProps> = ({
  size = 8,
  onClick,
  active,
}) => {
  const theme = useTheme();
  const backgroundColor = active
    ? theme.color.foreground.primary
    : theme.color.ornament.divider;

  if (!onClick) {
    return null;
  }

  return (
    <Flex extend={{ flexDirection: 'row' }}>
      <Block
        extend={{
          width: size,
          height: size,
          backgroundColor,
          borderRadius: size * 0.5,
        }}
        onClick={() => onClick()}
      />
      <Spacer />
    </Flex>
  );
};
