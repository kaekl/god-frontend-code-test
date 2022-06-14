import React from 'react';
import { SelectInput, View } from 'vcc-ui';
import type { ProductItemType } from '@/shared-types';

interface FilterItemProps {
  productItems: Array<ProductItemType>;
  setFilterItems: Function;
}

export const FilterItem: React.FC<FilterItemProps> = ({
  productItems,
  setFilterItems,
}) => {
  const [value, setValue] = React.useState('');

  // Getting unique filter values from productItems list
  const filterValues = Array.from(
    new Set(productItems.map((product) => product.bodyType))
  );

  const options =
    filterValues &&
    filterValues.map((bodyType: any) => {
      return (
        <option value={bodyType} key={bodyType}>
          {bodyType}
        </option>
      );
    });

  const onFilterChange = (e: string) => {
    // Find all products that match the selected value
    const getFilteredItems = productItems.filter(
      (product) => e === product.bodyType || e === 'all types'
    );

    setValue(e);
    setFilterItems(getFilteredItems);
  };

  return (
    <View paddingTop='8' paddingLeft='4' width='300px'>
      <SelectInput
        value={value}
        label={'Car Type'}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value='all types'>all types</option>
        {options}
      </SelectInput>
    </View>
  );
};
