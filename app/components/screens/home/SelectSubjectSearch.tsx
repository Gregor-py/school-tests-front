import { FC } from 'react';
import { useMutation, useQuery } from 'react-query';
import { SubjectService } from '@/services/subject.service';
import { EditTestService } from '@/services/test/edit-test.service';
import ReactSelect, { SingleValue } from 'react-select';
import SelectSubject from '@/screens/edit-test/EditTestHead/SelectSubject';

interface SelectSubjectSearch {
  setValue: (value: string) => void;
  value: string;
}

const SelectSubjectSearch: FC<SelectSubjectSearch> = ({ setValue, value }) => {
  const { data, isLoading } = useQuery(
    ['get subjects for search tests'],
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

  if (isLoading || !data) {
    return null;
  }
  const handleChange = (
    newValue: SingleValue<{
      label: string;
      value: string;
    }>
  ) => {
    if (newValue && newValue.value !== value) {
      setValue(newValue.value);
    }
  };
  const defaultValue = { label: 'Всі предмети', value: '' };
  const options = [defaultValue, ...data];

  return (
    <ReactSelect
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
      isLoading={isLoading}
      menuPortalTarget={document.body}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        container: (base) => ({ ...base, minWidth: 300 })
      }}
      className={'min-w-10'}
    />
  );
};

export default SelectSubjectSearch;
