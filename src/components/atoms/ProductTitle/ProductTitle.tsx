import React from 'react';
import { useTheme, View, Text, Flex } from 'vcc-ui';

interface ProductTitleProps {
  bodyType: string;
  modelName: string;
  modelType: string;
}

export const ProductTitle: React.FC<ProductTitleProps> = ({
  bodyType,
  modelName,
  modelType,
}) => {
  const theme = useTheme();

  return (
    <View extend={{ marginBottom: 24 }}>
      <Text subStyle='emphasis' fg={theme.color.foreground.secondary}>
        {bodyType.toUpperCase()}
      </Text>
      <Flex
        extend={{ fromM: { flexDirection: 'row', justifyContent: 'left' } }}
      >
        <Text
          variant='hillary'
          subStyle='emphasis'
          extend={{ marginRight: '10px' }}
        >
          {modelName}
        </Text>
        <Text variant='hillary' fg={theme.color.foreground.secondary}>
          {modelType}
        </Text>
      </Flex>
    </View>
  );
};
