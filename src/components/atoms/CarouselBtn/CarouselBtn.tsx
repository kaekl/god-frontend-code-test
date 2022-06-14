import React from 'react';
import { View } from 'vcc-ui';
import ChevronCircled from '@/assets/ChevronCircled';

interface CarouselBtnProps {
  display?: boolean;
  rotateLeft?: boolean;
  onClick: () => void;
}

export const CarouselBtn: React.FC<CarouselBtnProps> = ({
  display = true,
  rotateLeft = false,
  onClick,
}) => {
  const style = rotateLeft
    ? { width: 40, transform: 'rotate(180deg)' }
    : { width: 40 };

  if (!display) {
    return null;
  }

  return (
    <View extend={style} onClick={onClick}>
      <ChevronCircled />
    </View>
  );
};
