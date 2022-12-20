import { toast } from 'react-toastify';

export const showToast = (message, type = 'success') => toast(message, { type });

export const filterById = (array, id) => array.filter((item) => item.id !== id);
export const findById = (array, id) => array.find((item) => item.id === id);
