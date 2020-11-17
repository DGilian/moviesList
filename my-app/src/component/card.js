import React, {useState} from 'react'
import './card.css'

export default function Card({setCount, count}) {
  const [isSelected, setIsSelected] = useState(false)

  function increase() {
    setCount(count + 1)
    setIsSelected(true)
  }

  function decrease() {
    setCount(count -1)
    setIsSelected(false)
  }

  return (
    <div className={isSelected ? "card-container-selected" : "card-container"} onClick={()=> isSelected ?  decrease(): increase()}>
      <p> 200000</p>
      <p className="title"> title</p>
    </div>
  )
}