import React, { useState, useEffect } from 'react';
import { LoadingBar } from 'vcc-ui';
import { ProductCarousel } from '@/components/organisms';
import { useProducts } from '@/hooks';
import type { ProductItemType } from '@/shared-types';

const HomePage: React.FC = () => {
  const [productItems, setProductItems] = useState<Array<ProductItemType>>([]);
  // Note that this is not ideal since the data is only client-fetched
  const { items, isLoading, isError } = useProducts();

  useEffect(() => {
    setProductItems(items);
  }, [items]);

  if (isError) return <div>Failed to load :(</div>;
  if (isLoading) return <LoadingBar />;

  return <ProductCarousel productItems={productItems} />;
};

export default HomePage;
