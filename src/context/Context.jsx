import React, { useState, useEffect, useContext } from 'react'
import data from '../data/Data'

const GameContext = React.createContext(false)
export const GameContextProvider = ({ children }) => {
  const [flashCards, setFlashCards] = useState([])
  const [currentFlashCard, setCurrentFlashCard] = useState(1)
  const [countDown, setCountDown] = useState(5)
  const [time, setTime] = useState(() => Array(100).fill(0))

  let shuffled = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  useEffect(() => {
    setFlashCards(shuffled)
  }, [])

  const value = {
    flashCards,
    setFlashCards,
    currentFlashCard,
    setCurrentFlashCard,
    countDown,
    setCountDown,
    time,
    setTime,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)
