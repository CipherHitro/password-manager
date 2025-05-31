import { useState } from 'react'
import './App.css'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-white bg-[size:6rem_4rem]'>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        <Navbar />
        <Manager />
        </div>
      </main>
    </>
  )
}

export default App
