import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const followValue = searchParams.get('follow');

  useEffect(() => {
    if (!followValue) {
      setSelectedOption('option1');
      setSearchParams({ page: 1, follow: 'all' });
    } else if (followValue === 'all') {
      setSelectedOption('option1');
    } else if (followValue === 'true') {
      setSelectedOption('option2');
    } else if (followValue === 'false') {
      setSelectedOption('option3');
    }
  }, [followValue, setSearchParams]);

  const handleOptionChange = event => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'option1') {
      setSearchParams({ page: 1, follow: 'all' });
    } else if (value === 'option2') {
      setSearchParams({ page: 1, follow: true });
    } else if (value === 'option3') {
      setSearchParams({ page: 1, follow: false });
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
    </div>
  );
};

export default Filter;
