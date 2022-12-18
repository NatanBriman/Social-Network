import { toast } from 'react-toastify';

export const showToast = (message, type = 'success') => toast(message, { type });
