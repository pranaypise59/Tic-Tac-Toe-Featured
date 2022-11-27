import React, { useState } from 'react'
import Board from './components/Board';
import History from './components/History';
import Modal from './components/Modal';
import { calculateWinner } from './components/winner';
import './styles/root.scss'
import './styles/style.css'
const App = () => {

  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXturn: true },
  ])
  const [currentMove, setCurrentMove] = useState(0);
  const [resumeScreen, setResumeScreen] = useState(false)
  const [gameStatus, setGameStatus] = useState('play')
  const current = history[currentMove];

  const { winner, winningsquares } = calculateWinner(current.board)
  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    if (currentMove !== history.length - 1) {
      setGameStatus('Resumed')
      setResumeScreen(true)
      return;
    }

    let last = history[history.length - 1];
    const newBoard = last.board.map((square, pos) => {
      if (pos === position) {
        return last.isXturn ? 'X' : 'O';
      }
      return square;
    })
    setHistory(history.concat({ board: newBoard, isXturn: !last.isXturn }))
    setCurrentMove(currentMove + 1)

  }

  const moveTo = (index) => {
    setCurrentMove(index)
  };

  const resume = () => {
    setCurrentMove(history.length - 1);
    setResumeScreen(false)
  }

  const restart = () => {
    setCurrentMove(0)
    setHistory([
      { board: Array(9).fill(null), isXturn: true },
    ])
    setResumeScreen(false)
  }
  return (
    <>
      <div class="context">
        <div className='container'>
          <h1 style={{ textAlign: 'center', margin: 40 }}>TIC TAC TOE</h1>
          {winner
            ? <h2 className='winnerheading'>The Winner is <span>{`${current.isXturn ? 'O' : 'X'}`}</span></h2>
            : (history.length === 10 ? <h2 className='winnerheading'>X & O tied</h2> : <h2 className='turnheading'>{`Next Turn ${current.isXturn ? 'X' : 'O'}`}</h2>)
          }
          <Board board={current.board} handleSquareClick={handleSquareClick} winningsquares={winningsquares} />
          {winner || history.length === 10 &&
            <button onClick={() => { restart() }} className="accept">Restart</button>
          }
          {winner &&
            <button onClick={() => { restart() }} className="accept">Restart</button>
          }
          <History history={history} moveTo={moveTo} currentMove={currentMove} />

          {resumeScreen && <Modal setresumeScreen={setResumeScreen} resume={resume} restart={restart} history={history} winner={winner} current={current} />}
        </div>


        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default App;