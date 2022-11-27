import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const CustomizedToast: FC = () => {
  return (
    <ToastContainer
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={true}
      theme={'light'}
    />
  );
};

export default CustomizedToast;
