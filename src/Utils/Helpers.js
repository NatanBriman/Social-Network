import { toast } from 'react-toastify';

export const removeObjectFromArrayById = (array, objectToRemove) =>
  array.filter(({ id }) => id !== objectToRemove.id);

// TODO: Use RambdaJs!!
export const showToast = (type, message) => toast(message, { type });
