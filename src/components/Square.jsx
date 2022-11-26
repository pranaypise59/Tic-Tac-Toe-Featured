import React from 'react'

const Square = ({onClick, IswinningSquare,value}) => {
  return (
    <button className='square' onClick={onClick} style={{fontWeight:`${IswinningSquare?'bold':'normal'}`,backgroundColor:`${IswinningSquare?'skyblue':''}`,color:`${IswinningSquare?'white':''}`}} >{value}</button>
  )
}

export default Square