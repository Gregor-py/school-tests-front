import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export const useDebouncedMutation = <T>(mutate: () => any, timer: number, value: T) => {
	const [isChanged, setIsChanged] = useState(false)
	const debouncedValue = useDebounce(value, timer)

	useEffect(() => {
		setIsChanged(true)
	}, [value])

	useEffect(() => {
		if (isChanged) {
			mutate()
			setIsChanged(false)
		}
	}, [debouncedValue])
}