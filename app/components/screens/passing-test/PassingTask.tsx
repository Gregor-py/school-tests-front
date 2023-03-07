import { FC } from 'react';
import { usePassingTest } from '@/screens/edit-test/usePassingTest';
import { IAnswer, ITask } from '@/shared/types/test.types';
import styles from './PassingTest.module.scss';
import { useSwiper } from 'swiper/react';

interface PassingTask {
  passingTestId: string;
  task: ITask;
  isLast: boolean;
}

const PassingTask: FC<PassingTask> = ({ passingTestId, task, isLast }) => {
  const { addPassedTask, finishTest } = usePassingTest(passingTestId);
  const swiper = useSwiper();

  const handleAnswerClick = (chosenAnswer: string) => {
    addPassedTask({ taskId: task._id, chosenAnswer: chosenAnswer });

    if (isLast) {
      finishTest();
    }

    swiper.slideNext();
  };

  return (
    <div className={styles.passingTask}>
      <h3 className={styles.title}>{task.question}</h3>
      <div className={styles.answers}>
        {task.answerVariants.map((answerVariant: IAnswer) => (
          <button
            onClick={() => handleAnswerClick(answerVariant._id)}
            key={answerVariant._id}
            className={styles.answerVariant}
          >
            <div className={styles.decor}></div>
            <div className={styles.text}>{answerVariant.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PassingTask;
