import { FC, useEffect } from 'react';
import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import { useMutation } from 'react-query';
import { TestService } from '@/services/test/test.service';
import { useRouter } from 'next/router';

interface CreateTestButton {
  refetch: () => void;
}

const CreateTestButton: FC<CreateTestButton> = ({ refetch }) => {
  const {
    mutate: createTest,
    isSuccess,
    data
  } = useMutation('create test', () => TestService.create());
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push(`/test/edit/${data.data._id}`);
    }
  }, [isSuccess]);

  const handleClick = () => {
    createTest();
  };

  return (
    <button
      onClick={handleClick}
      className="p-3 bg-amber-200 rounded-full text-4xl fixed bottom-6 right-6 hover:bg-amber-300 transition-all"
    >
      <MaterialIcon name={'MdAdd'} />
    </button>
  );
};

export default CreateTestButton;
