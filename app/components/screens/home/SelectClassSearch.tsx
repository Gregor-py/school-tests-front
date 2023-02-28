import { FC } from 'react';
import { useMutation, useQuery } from 'react-query';
import { SubjectService } from '@/services/subject.service';
import { EditTestService } from '@/services/test/edit-test.service';
import ReactSelect, { SingleValue } from 'react-select';
import SelectSubject from '@/screens/edit-test/EditTestHead/SelectSubject';

interface SelectClassSearch {
  setValue: (value: number) => void;
  value: number;
}

const SelectClassSearch: FC<SelectClassSearch> = ({ setValue, value }) => {
  const defaultValue = { label: 'Всі класи', value: 0 };
  const options = [
    defaultValue,
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
    if (newValue && newValue.value !== value) {
      setValue(newValue.value);
    }
  };

  return (
    <ReactSelect
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
      menuPortalTarget={document?.body}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        container: (base) => ({ ...base, minWidth: 150 })
      }}
    />
  );
};

export default SelectClassSearch;
