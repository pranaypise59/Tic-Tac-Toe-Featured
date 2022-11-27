import React from 'react'

const History = ({history,moveTo,currentMove}) => {
    return (
        <div className='history'>
            <h3>LAST MOVES</h3>
            <div>
                {history.map((_, index) => {
                    return <button key={index} style={{backgroundColor: index === currentMove?'aquamarine':'antiquewhite'}} onClick={()=>{moveTo(index)}}>{index === 0 ? 'Start of The Game':`Go to #${index}`}</button>
                })}
            </div>
        </div>
    )
}

export default History