// import { useState } from 'react'
import './style/App.css'
import DisplayScore from './Displaycore'
import PlayGame from './PlayGame'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <DisplayScore count={count} setCount={setCount}/>
    <div className='body'>
     <PlayGame count={count} setCount={setCount}/>
    </div>
    </>
  )
}

export default App
