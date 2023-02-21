import { EditTestService } from '@/services/test/edit-test.service';
import { FC } from 'react';
import { useMutation } from 'react-query';
import ReactSelect, { SingleValue } from 'react-select';

interface SelectClass {
  testId: string;
  schoolClass: number;
}

const SelectClass: FC<SelectClass> = ({ testId, schoolClass }) => {
  const { mutate: changeClass, isLoading: isLoadingMutation } = useMutation(
    'change edit-test class',
    (data: { testId: string; schoolClass: number }) =>
      EditTestService.changeClass(data.testId, data.schoolClass)
  );

  const options = [
    { label: '1 клас', value: 1 },
    { label: '2 клас', value: 2 },
    { label: '3 клас', value: 3 },
    { label: '4 клас', value: 4 },
    { label: '5 клас', value: 5 },
    { label: '6 клас', value: 6 },
    { label: '7 клас', value: 7 },
    { label: '8 клас', value: 8 },
    { label: '9 клас', value: 9 },
    { label: '10 клас', value: 10 },
    { label: '11 клас', value: 11 }
  ];

  const handleChange = (
    newValue: SingleValue<{
      label: string;
      value: number;
    }>
  ) => {
    if (newValue) {
      changeClass({ testId, schoolClass: newValue.value });
    }
  };
  const defaultValue = options.find(
    (classOption) => classOption.value === schoolClass
  );

  return (
    <ReactSelect
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
      isLoading={isLoadingMutation}
    />
  );
};

export default SelectClass;
