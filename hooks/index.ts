import { useEffect, useRef, useState } from 'react'

const useThrottle = <T>(value: T, interval: number = 300) => {
  const [throttleValue, setThrottleValue] = useState<T>(value)
  const startTimeRef = useRef<Date>(new Date())

  useEffect(() => {
    let endTime = Date.now()
    const startTime = startTimeRef.current
    let timer: any
    const diffTime = endTime - startTime.valueOf()
    const nextTime = interval - (endTime - startTime.valueOf())
    if (diffTime >= interval) {
      setThrottleValue(value)
      startTimeRef.current = new Date()
    } else {
      timer = setTimeout(() => {
        setThrottleValue(value)
        startTimeRef.current = new Date()
      }, nextTime)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [value, interval])

  return throttleValue
}

type UseDebounce = <T>(value: T, interval: number) => T

const useDebounce: UseDebounce = <T>(value: T, interval: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, interval)

    return () => {
      clearTimeout(timer)
    }
  }, [value, interval])

  return debouncedValue
}

const debounce = <T>(fn: (args: T) => void, delay = 200) => {
  let timer: any
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      /* @ts-ignore */
      fn.apply(this, arguments)
    }, delay)
  }
}

export { useDebounce, useThrottle, debounce }
