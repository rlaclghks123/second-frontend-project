import axios from 'axios';

export const orderList = async () => {
  const { data } = await axios.get('http://localhost:3001/itemㄴs');
  return data;
};
