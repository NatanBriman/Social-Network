import { toast } from 'react-toastify';

export const removeObjectFromArrayById = (array, objectToRemove) =>
  array.filter(({ id }) => id !== objectToRemove.id);

// TODO: Use RambdaJs!!
export const showToast = (message, type = 'success') => toast(<p>{message}</p>, { type });
