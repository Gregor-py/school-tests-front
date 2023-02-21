import { SubjectService } from '@/services/subject.service';
import { EditTestService } from '@/services/test/edit-test.service';
import { FC } from 'react';
import { useMutation, useQuery } from 'react-query';
import ReactSelect, { SingleValue } from 'react-select';

interface SelectSubject {
  testId: string;
  subjectId?: string;
}

const SelectSubject: FC<SelectSubject> = ({ testId, subjectId }) => {
  const { data, isLoading } = useQuery(
    ['get subjects for edit edit-test'],
    () => SubjectService.getAllSubjects(),
    {
      select({ data }) {
        return data.map((subject) => ({
          label: subject.name,
          value: subject._id
        }));
      }
    }
  );
  const { mutate: changeSubject, isLoading: isLoadingMutation } = useMutation(
    'change edit-test subject',
    (data: { testId: string; newSubject: string }) =>
      EditTestService.changeSubject(data.testId, data.newSubject)
  );

  if (isLoading || !data) {
    return null;
  }
  const handleChange = (
    newValue: SingleValue<{
      label: string;
      value: string;
    }>
  ) => {
    if (newValue) {
      changeSubject({ testId, newSubject: newValue.value });
    }
  };
  const defaultValue = data.find((subject) => subject.value === subjectId);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      onChange={handleChange}
      options={data}
      isLoading={isLoadingMutation}
    />
  );
};

export default SelectSubject;
