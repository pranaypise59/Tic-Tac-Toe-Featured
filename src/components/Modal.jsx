import React from 'react'

const Modal = ({ setResumeScreen, resume, restart }) => {
    return (
        <div class="Modalcontainer">
            <div class="cookiesContent" id="cookiesPopup">
                <button class="close" onClick={() => { setResumeScreen(false) }}>✖</button>
                <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
                <p>Do you Want to Continue the Game?
                </p>
                <button class="accept" onClick={() => { resume() }}>Continue</button>

                <button class="restart" onClick={() => {restart()}}>Restart</button>
            </div>
        </div>
    )
}

export default Modal