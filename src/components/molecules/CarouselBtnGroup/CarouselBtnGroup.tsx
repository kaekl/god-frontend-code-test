import React from 'react';
import type { ButtonGroupProps } from 'react-multi-carousel';
import { View, Flex, Spacer } from 'vcc-ui';
import { CarouselBtn } from '@/components/atoms';

export const CarouselBtnGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  carouselState,
}) => {
  if (!next || !previous) {
    return null;
  }

  // fixed position is needed by 'react-multi-carousel' to display custom btns
  return (
    <View extend={{ position: 'fixed', right: 0, top: 580 }}>
      <Flex extend={{ flexDirection: 'row', paddingRight: '5vh' }}>
        <CarouselBtn
          display={carouselState?.currentSlide === 0 ? false : true}
          rotateLeft
          onClick={() => previous()}
        />
        <Spacer />
        <CarouselBtn onClick={() => next()} display />
      </Flex>
    </View>
  );
};
