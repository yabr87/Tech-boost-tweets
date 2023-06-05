import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiX } from 'react-icons/bi';

import { FilterContainer, FilterBtn, ParamsBtn } from './FilterBar.styles';
import Filter from 'components/Filter/Filter';

const FilterBar = () => {
  const [isNotOpen, setIsNotOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const resetFilter = () => {
    setSearchParams({ page: 1, follow: 'all' });
  };
  const filterParams = () => {
    const params = searchParams.get('follow');
    if (params === 'all') {
      return;
    }

    if (params === 'true') {
      return (
        <ParamsBtn onClick={resetFilter}>
          FOLLOWING <BiX size={20} color="#5CD3A8" />
        </ParamsBtn>
      );
    }
    if (params === 'false') {
      return (
        <ParamsBtn onClick={resetFilter}>
          UNFOLLOWING <BiX size={20} color="#5CD3A8" />
        </ParamsBtn>
      );
    }
  };

  return (
    <>
      <FilterContainer>
        {filterParams()}
        <FilterBtn onClick={() => setIsNotOpen(!isNotOpen)}>Filter</FilterBtn>
        {!isNotOpen && <Filter setIsNotOpen={setIsNotOpen} />}
      </FilterContainer>
    </>
  );
};

export default FilterBar;
