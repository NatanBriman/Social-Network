import { toast } from 'react-toastify';

export const showToast = (message, type = 'success') => toast(message, { type });

export const filterByNotId = (array, id, idPath = 'id') =>
  array.filter((item) => item[idPath] !== id);
export const filterById = (array, id, idPath = 'id') => array.filter((item) => item[idPath] === id);
export const findById = (array, id) => array.find((item) => item.id === id);
