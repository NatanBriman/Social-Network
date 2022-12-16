import { toast } from 'react-toastify';

export const removeObjectFromArrayById = (array, objectToRemove) =>
  array.filter(({ id }) => id !== objectToRemove.id);

// TODO: Use RambdaJs!!
export const showAlert = (type, message) => toast(message, { type });
