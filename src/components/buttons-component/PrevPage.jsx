import { useState, useEffect } from 'react'
import { useGameContext } from '../../context/Context'

const PrevPage = () => {
  const { setCurrentFlashCard, flashCards } = useGameContext()
  const [longPress, setLongPress] = useState(false)

  const prevPage = () => {
    setCurrentFlashCard((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 1) {
        prevPage = flashCards?.length
      }
      return prevPage
    })
  }

  useEffect(() => {
    let timerId
    if (longPress) {
      timerId = setTimeout(prevPage, 150)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [prevPage, longPress])

  return {
    prevHandlers: {
      onClick: prevPage,
      onMouseDown: () => setLongPress(true),
      onMouseUp: () => setLongPress(false),
      onMouseLeave: () => setLongPress(false),
      onTouchStart: () => setLongPress(true),
      onTouchEnd: () => setLongPress(false),
    },
  }
}

export default PrevPage
