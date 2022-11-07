import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import useResizeObserver from '@react-hook/resize-observer'

interface Size {
  width: number
  height: number
}

function useView<T extends HTMLElement = HTMLDivElement>(
  target: any,
): [MutableRefObject<T | null>, Size] {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  const setRoundedSize = ({ width, height }: Size) => {
    setSize({ width: Math.round(width), height: Math.round(height) })
  }

  useEffect(() => {
    target.current && setRoundedSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => {
    const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0]
    setRoundedSize({ width, height })
  })

  return [target, size]
}

export default useView
