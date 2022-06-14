import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTheme, View } from 'vcc-ui';
import { CarouselDot } from '@/components/atoms';
import {
  ProductItem,
  CarouselButtonGroup,
  FilterItem,
} from '@/components/molecules';
import { useIsDesktop } from '@/hooks';
import type { ProductItemType } from '@/shared-types';

const CAROUSEL_SETUP = {
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

interface ProductCarouselProps {
  productItems: Array<ProductItemType>;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  productItems,
}) => {
  const [filterItems, setFilterItems] = useState<Array<ProductItemType>>([]);
  const theme = useTheme();
  const isDesktop = useIsDesktop();
  const showDots = isDesktop ? false : true;

  useEffect(() => {
    setFilterItems(productItems);
  }, [productItems]);

  if (!productItems || !filterItems) return null;

  return (
    <React.Fragment>
      <FilterItem productItems={productItems} setFilterItems={setFilterItems} />
      <View
        extend={{
          backgroundColor: theme.color.background.primary,
        }}
        paddingTop='8'
      >
        <Carousel
          responsive={CAROUSEL_SETUP}
          arrows={false}
          customButtonGroup={isDesktop ? <CarouselButtonGroup /> : null}
          showDots={showDots}
          customDot={<CarouselDot />}
          partialVisible
          autoPlay={false}
          keyBoardControl
        >
          {filterItems &&
            filterItems.map((item) => {
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
    </React.Fragment>
  );
};
