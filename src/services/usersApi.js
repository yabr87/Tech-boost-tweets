import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fe6905c5c800a723807f95.mockapi.io',
});

export const getUsers = async (page = 1) => {
  try {
    const { data } = await instance.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const followUser = async data => {
  const { id, followers, follow } = data;
  try {
    const { data: result } = await instance.patch(`/users${id}`, {
      followers,
      follow,
    });
    return result;
  } catch (error) {
    throw error;
  }
};
