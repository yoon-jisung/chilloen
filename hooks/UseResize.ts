import { useState, useEffect } from 'react'

const UseResize = () => {
  const [viewWidth, setWidth] = useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return { viewWidth }
}

export default UseResize
