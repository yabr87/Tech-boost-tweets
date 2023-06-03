import React, { useEffect, useState } from 'react';

import { UlList } from './UsersList.styles';
import Card from 'components/Card';
import { getUsers, followUser } from 'services/usersApi';

const UsersList = () => {
  const [data, setData] = useState([]);
  //  const [isLoaderOpen, setIsLoaderOpen] = useState(true);

  const fetchData = async () => {
    try {
      const result = await getUsers();
      setData(result);
    } catch (error) {
      alert(`Щось пішло не так. Спробуй ще раз!`);
    } finally {
      // if (isLoaderOpen) {
      //   setIsLoaderOpen(false);
      // }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UlList>
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </UlList>
  );
};

export default UsersList;
