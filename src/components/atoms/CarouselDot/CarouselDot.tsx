import React, { useCallback } from 'react';
import { DotProps } from 'react-multi-carousel';
import { useTheme, Flex, Block, Spacer } from 'vcc-ui';

export const CarouselDot: React.FC<DotProps> = ({ onClick, active }) => {
  const size = 8;
  const theme = useTheme();
  const backgroundColor = active
    ? theme.color.foreground.primary
    : theme.color.ornament.divider;

  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  if (!onClick) return null;

  return (
    <Flex extend={{ flexDirection: 'row' }}>
      <Block
        extend={{
          width: size,
          height: size,
          backgroundColor,
          borderRadius: size * 0.5,
        }}
        onClick={handleClick}
      />
      <Spacer />
    </Flex>
  );
};
