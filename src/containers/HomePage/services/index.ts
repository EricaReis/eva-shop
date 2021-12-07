import { api } from "../../../services/api";

const getCategories = async () => {
  const res = await api.get(`/products`);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getCategories }; 
