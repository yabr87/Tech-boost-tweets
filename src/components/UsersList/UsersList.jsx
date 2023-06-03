import React, { useEffect, useState } from 'react';

import { UlList } from './UsersList.styles';
import Card from 'components/Card';
import { getUsers } from 'services/usersApi';
import Button from 'components/shared/Button';

const UsersList = () => {
  const [data, setData] = useState([]);
  const [showButton, setShowButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  console.log(page);

  const fetchData = async page => {
    try {
      setIsLoading(true);
      const result = await getUsers(page);
      setData(prevData => [...prevData, ...result[0]]);
      setShowButton(result[1]?.length);
    } catch (error) {
      alert(`Щось пішло не так. Спробуй ще раз!`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
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
          onClick={() => setPage(page + 1)}
        />
      )}
    </>
  );
};

export default UsersList;
