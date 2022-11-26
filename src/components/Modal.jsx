import React from 'react'

const Modal = ({ history, resume, restart, winner,current }) => {
    const allmoved = current.board.every((el)=>{el!==null})
    return (
        <div className="Modalcontainer">
            <div className="cookiesContent" id="cookiesPopup">
                <button className="close" onClick={() => { resume() }}>✖</button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMa2SCT-WfjrThbnxhoNliTEgmFok4rYy-A&usqp=CAU" />

                {winner ? <><div><span className="winner">{winner}</span> Won the Math</div><button className="restart" onClick={() => { restart() }}>Restart</button></>:(<><div>Do you want to Continue?</div><button className="accept" onClick={() => { resume() }}>Continue Game</button><button className="restart" onClick={() => { restart() }}>Restart</button></>)}


            </div>
        </div>
    )
}

export default Modal