import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fe6905c5c800a723807f95.mockapi.io',
});

export const getUsers = async params => {
  const { page = '1', follow } = params;
  try {
    const config = {
      params: {},
    };

    if (follow === 'true' || follow === 'false') {
      config.params.follow = follow;
    }

    const [response1, response2] = await Promise.all([
      instance.get(`/users?page=${+page}&limit=3`, config),
      instance.get(`/users?page=${+page + 1}&limit=3`, config),
    ]);

    const data = response1.data;
    const checkPageLimit = response2.data;

    return [data, checkPageLimit];
  } catch (error) {
    throw error;
  }
};

export const updateUser = async data => {
  const { id, followers, follow } = data;
  console.log(data);
  try {
    const { data: result } = await instance.put(`/users/${id}`, {
      followers,
      follow,
    });
    return result;
  } catch (error) {
    throw error;
  }
};
