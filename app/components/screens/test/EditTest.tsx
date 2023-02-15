import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { EditTestService } from '@/services/test/edit-test.service'
import { FC } from 'react'
import { useQuery } from 'react-query'
import EditTestHead from './EditTestHead'

const EditTest: FC<{ testId: string }> = ({ testId }) => {
  const { data, isLoading } = useQuery(
    'get test data for edit',
    () => EditTestService.getTest(testId),
    {
      select({ data }) {
        return data
      },
      onError(error) { }
    }
  )

  if (isLoading || !data) {
    return <div className='mx-auto max-w-3xl'>
      <SkeletonLoader count={1} className="h-40 mt-5" />
      <SkeletonLoader count={5} className="h-80 mt-6" />
    </div>
  }

  return (
    <div className='py-4'>
      <EditTestHead testId={testId} description={data.title} title={data.description} />
    </div>
  )
}

export default EditTest
