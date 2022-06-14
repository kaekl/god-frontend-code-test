import React from 'react';
import { View, Block, Flex, Link, Spacer } from 'vcc-ui';
import { ProductTitle, ProductImage } from '@/components/atoms';
import { useDetectDevice } from '@/hooks';
import type { ProductItemType } from '@/shared-types';

interface ProductItemProps {
  productItem: ProductItemType;
  displayLinks?: boolean;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  productItem,
  displayLinks = false,
}) => {
  const { id, modelName, bodyType, modelType, imageUrl } = productItem;
  const isDesktop = useDetectDevice();

  return (
    <View padding={2} marginBottom={isDesktop ? 12 : 2} alignItems='center'>
      <View>
        <ProductTitle
          bodyType={bodyType}
          modelName={modelName}
          modelType={modelType}
        />
        <Block>
          <ProductImage imageUrl={imageUrl} modelName={modelName} />
        </Block>
      </View>
      {displayLinks && (
        <View>
          <Flex
            extend={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 8,
            }}
          >
            <Link arrow='right' href={`/learn/${id}`}>
              LEARN
            </Link>
            <Spacer size={4} />
            <Link arrow='right' href={`/shop/${id}`}>
              SHOP
            </Link>
          </Flex>
        </View>
      )}
    </View>
  );
};
