import { errorCatch } from '../api/api.helper';
import { toast } from 'react-toastify';

export const toastError = (error: any) => {
  const message = errorCatch(error);

  toast(message, {
    hideProgressBar: false,
    autoClose: 2000,
    type: 'error'
  });

  throw message;
};
