import React from 'react';
import { View } from 'vcc-ui';
import ChevronCircled from './ChevronCircled';

interface CarouselButtonProps {
  direction: 'right' | 'left';
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
}) => {
  const style =
    direction === 'left'
      ? { width: 40, transform: 'rotate(180deg)' }
      : { width: 40 };

  return (
    <View extend={style} onClick={onClick}>
      <ChevronCircled />
    </View>
  );
};
