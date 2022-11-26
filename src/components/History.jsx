import React from 'react'

const History = ({history,moveTo,currentMove}) => {
    return (
        <div className='history'>
            <h3>Previous Steps</h3>
            <div>
                {history.map((history, index) => {
                    return <button style={{backgroundColor: index === currentMove?'aquamarine':'antiquewhite'}} onClick={()=>{moveTo(index)}}>{index === 0 ? 'Start The Game':`Go to #${index}`}</button>
                })}
            </div>
        </div>
    )
}

export default History