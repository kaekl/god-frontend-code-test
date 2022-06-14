import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTheme, View } from 'vcc-ui';
import { CarouselDot } from '@/components/atoms';
import { ProductItem, CarouselBtnGroup } from '@/components/molecules';
import { useDetectDevice } from '@/hooks';
import type { ProductItemType } from '@/shared-types';

interface ProductCarouselProps {
  productItems: Array<ProductItemType>;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  productItems,
}) => {
  const theme = useTheme();
  const isDesktop = useDetectDevice();
  const shouldShowDots = isDesktop ? false : true;
  const carouselSetup = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.3,
      slidesToSlide: 1,
    },
  };

  if (!productItems) {
    return null;
  }

  return (
    <View
      extend={{
        backgroundColor: theme.color.background.primary,
      }}
      paddingTop={8}
    >
      <Carousel
        responsive={carouselSetup}
        arrows={false}
        customButtonGroup={isDesktop ? <CarouselBtnGroup /> : null}
        showDots={shouldShowDots}
        customDot={<CarouselDot />}
        partialVisible
        autoPlay={false}
        keyBoardControl
      >
        {productItems &&
          productItems.map((item) => {
            const productItem = {
              id: item.id,
              modelName: item.modelName,
              bodyType: item.bodyType,
              modelType: item.modelType,
              imageUrl: item.imageUrl,
            };
            return (
              <ProductItem
                key={item.id}
                productItem={productItem}
                displayLinks
              />
            );
          })}
      </Carousel>
    </View>
  );
};
