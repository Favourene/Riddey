import './App.css'
import { useState } from 'react'
import { ReactComponent as Badge } from './image/Badge.svg'
import { HiOutlineCheck } from 'react-icons/hi'

function App() {
  const totalBoards = 10
  const [boardCount, setBoardCount] = useState(0)
  const progressPercent = (boardCount / totalBoards) * 100
  const handleClick = () => {
    if (boardCount < totalBoards) {
      setBoardCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <main className='App'>
      <article className='modal'>
        <section className='badge'>
          <article className='badge-border'>
            <Badge />
          </article>
        </section>
        <section className='text'>
          <article className='modal-top-content'>
            <h1>Upgrade to Riddey PRO and boost productivity!</h1>
            <p>
              Pellentesque porttitor euismod ante, accumsan consequat purus!
            </p>
          </article>
          <article className='modal-features'>
            <ul className='cards'>
              <li className='card'>
                <section className='check'>
                  <HiOutlineCheck />
                </section>
                <section className='feature'>
                  <p>
                    <strong>Feature #1</strong> - Etiam convallis, nibh vitae
                    dui risus
                  </p>
                </section>
              </li>
              <li className='card'>
                <section className='check'>
                  <HiOutlineCheck />
                </section>
                <section className='feature'>
                  <p>
                    <strong>Feature #2</strong> - Etiam convallis, nibh vitae
                    dui risus
                  </p>
                </section>
              </li>
              <li className='card'>
                <section className='check'>
                  <HiOutlineCheck />
                </section>
                <section className='feature'>
                  <p>
                    <strong>Feature #3</strong> - Etiam convallis, nibh vitae
                    dui risus
                  </p>
                </section>
              </li>
            </ul>
            <section className='usage'>
              <h2>Current usage</h2>
              <h3>{boardCount} out of 10 boards in use</h3>
              <section className='progress'>
                <section
                  className='progress-value'
                  style={{ width: `${progressPercent}%` }}
                ></section>
              </section>
            </section>
          </article>
          <button disabled={boardCount >= totalBoards} onClick={handleClick}>
            Add New Board
          </button>
        </section>
      </article>
    </main>
  )
}

export default App
