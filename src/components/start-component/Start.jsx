import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css'
import { useGameContext } from '../../context/Context'

const Start = () => {
  const { setCountDown } = useGameContext()
  return (
    <div className="settings">
      <div className="container">
        <form className="time-settings">
          <label htmlFor="">Boshlang'ich vaqtni kiriting</label>
          <input
            type="number"
            onChange={(e) => setCountDown(e.target.value)}
            placeholder="Standart vaqt 5 soniya"
          />
        </form>
        <div className="start-button">
          <Link to="/cards">
            <button>Start</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start
