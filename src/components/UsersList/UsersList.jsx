import React, { useEffect, useState } from 'react';
import { getUsers } from 'services/usersApi';
import { useSearchParams } from 'react-router-dom';

import { UlList, ListWrapper } from './UsersList.styles';
import Card from 'components/Card';
import Button from 'components/shared/Button';
import FilterBar from 'components/FilterBar';

const UsersList = () => {
  const [data, setData] = useState([]);
  const [showButton, setShowButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = async params => {
    try {
      setIsLoading(true);
      const result = await getUsers(params);
      if (params.page === '1') {
        setData([]);
      } else {
      }
      setData(prevData => [...prevData, ...result[0]]);
      setShowButton(result[1]?.length);
    } catch (error) {
      alert(`Something went wrong. Try again!`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    if (!params.follow) {
      setSearchParams({ page: 1, follow: 'all' });
    }
    fetchData(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleClick = () => {
    const { page, follow } = Object.fromEntries(searchParams.entries());
    setSearchParams({ page: +page + 1, follow });
  };

  return (
    <ListWrapper>
      <FilterBar />
      <UlList>
        {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </UlList>
      {!!showButton && (
        <Button
          color="#EBD8FF"
          text="load more"
          loading={isLoading}
          onClick={handleClick}
        />
      )}
    </ListWrapper>
  );
};

export default UsersList;
