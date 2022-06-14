import React from 'react';
import type { ButtonGroupProps } from 'react-multi-carousel';
import { View, Flex, Spacer } from 'vcc-ui';
import { CarouselButton } from '@/components/atoms';

export const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  carouselState,
}) => {
  if (!next || !previous) return null;

  // fixed position is needed by 'react-multi-carousel' to display custom buttons
  return (
    <View extend={{ position: 'fixed', right: 0, top: 720 }}>
      <Flex extend={{ flexDirection: 'row', paddingRight: '5vh' }}>
        {carouselState?.currentSlide ? (
          <CarouselButton direction='left' onClick={() => previous()} />
        ) : null}
        <Spacer />
        <CarouselButton onClick={() => next()} direction='right' />
      </Flex>
    </View>
  );
};
