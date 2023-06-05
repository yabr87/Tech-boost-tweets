import React, { useState } from 'react';

import { FilterContainer, FilterBtn } from './FilterBar.styles';
import Filter from 'components/Filter/Filter';
import FilterParams from './FilterParams';

const FilterBar = () => {
  const [isNotOpen, setIsNotOpen] = useState(true);

  return (
    <>
      <FilterContainer>
        <FilterParams />
        <FilterBtn onClick={() => setIsNotOpen(!isNotOpen)}>Filter</FilterBtn>
        {!isNotOpen && <Filter setIsNotOpen={setIsNotOpen} />}
      </FilterContainer>
    </>
  );
};

export default FilterBar;
