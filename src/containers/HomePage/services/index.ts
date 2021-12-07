import { api } from "../../../services/api";

const getCategories = async () => {
  const res = await api.get(`/categories`);
  return res.data;
};

const getCategoriesById = async (id: string) => {
  const res = await api.get(`/categories/${id}`);
  return res.data;
};

const getProducts = async () => {
  const res = await api.get(`/products`);
  return res.data;
};

const getProductsById = async (id: string) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getCategories, 
  getCategoriesById, 
  getProducts, 
  getProductsById 
}; 
