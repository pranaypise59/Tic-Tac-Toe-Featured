import React from 'react'

const History = ({history,moveTo}) => {
    return (
        <div className='history'>
            <h3>Previous Steps</h3>
            <div>
                {history.map((history, index) => {
                    return <button onClick={()=>{moveTo(index)}}>{index === 0 ? 'Start The Game':`Go to #${index}`}</button>
                })}
            </div>
        </div>
    )
}

export default History