import { FC } from 'react';
import Meta from '@/utils/meta/Meta';
import { toast } from 'react-toastify';

const Home: FC = () => {
  return (
    <Meta title="Шкільні тести" description={'Створюй та виконуй тести'}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi debitis
        ex fugiat illum in nisi, rem reprehenderit suscipit tenetur
        voluptatibus. Amet corporis est fuga id suscipit! Distinctio laudantium
        nam quos!
        <button
          onClick={() =>
            toast('Toast is good', {
              hideProgressBar: true,
              autoClose: 2000,
              type: 'success'
            })
          }
          className="rounded-lg px-6 py-3 text-lg bg-amber-300"
        >
          Натисни
        </button>
      </div>
    </Meta>
  );
};

export default Home;
