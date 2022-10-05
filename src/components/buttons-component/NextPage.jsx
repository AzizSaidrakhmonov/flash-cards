import { useState, useEffect } from 'react'
import { useGameContext } from '../../context/Context'

const NextPage = () => {
  const { setCurrentFlashCard, flashCards } = useGameContext()
  const [longPress, setLongPress] = useState(false)

  const nextPage = () => {
    setCurrentFlashCard((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > flashCards?.length - 1) {
        nextPage = 1
      }
      return nextPage
    })
  }

  useEffect(() => {
    let timerId
    if (longPress) {
      timerId = setTimeout(nextPage, 150)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [nextPage, longPress])

  return {
    nextHandlers: {
      onClick: nextPage,
      onMouseDown: () => setLongPress(true),
      onMouseUp: () => setLongPress(false),
      onMouseLeave: () => setLongPress(false),
      onTouchStart: () => setLongPress(true),
      onTouchEnd: () => setLongPress(false),
    },
  }
}

export default NextPage
