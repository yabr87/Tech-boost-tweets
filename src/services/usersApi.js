import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fe6905c5c800a723807f95.mockapi.io',
});

// export const getUsers = async (page = 1) => {
//   try {
//     const { data } = await instance.get(`/users?page=${page}&limit=3`);
//     const { data2 } = await instance.get(`/users?page=${page + 1}&limit=3`);
//     return [data, data2];
//   } catch (error) {
//     throw error;
//   }
// };

export const getUsers = async (page = 1) => {
  console.log('====>', page);
  try {
    const [response1, response2] = await Promise.all([
      instance.get(`/users?page=${page}&limit=3&follow=true`),
      instance.get(`/users?page=${page + 1}&limit=3&follow=true`),
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
