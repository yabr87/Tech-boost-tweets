import { useSearchParams } from 'react-router-dom';
import { BiX } from 'react-icons/bi';

import { ParamsBtn } from './FilterParams.styles';

const FilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('follow');

  const resetFilter = () => {
    setSearchParams({ page: 1, follow: 'all' });
  };

  if (params === 'all') {
    return <></>;
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

export default FilterParams;
