import React from 'react';
import Image from 'next/image';

interface ProductImageProps {
  imageUrl: string;
  modelName: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  imageUrl,
  modelName,
}) => {
  return <Image src={imageUrl} alt={modelName} width={400} height={300} />;
};
