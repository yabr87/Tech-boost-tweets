import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterWrapper, InputLabel, FilterInput } from './Filter.styles';

const Filter = ({ setIsNotOpen }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const options = [
    { value: 'all', label: 'All' },
    { value: 'true', label: 'Following' },
    { value: 'false', label: 'Unfollowing' },
  ];

  const followValue = searchParams.get('follow');

  useEffect(() => {
    if (!followValue) {
      setSelectedOption('all');
    } else {
      setSelectedOption(followValue);
    }
  }, [followValue, setSearchParams]);

  
  const handleOptionChange = event => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'all') {
      setSearchParams({ page: 1, follow: 'all' });
    } else {
      setSearchParams({ page: 1, follow: value });
    }
    setIsNotOpen(true);
  };

  return (
    <FilterWrapper>
      {options.map(option => (
        <InputLabel key={option.value}>
          <FilterInput
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </InputLabel>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
