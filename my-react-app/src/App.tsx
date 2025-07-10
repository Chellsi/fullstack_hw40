import './App.css'
import { ControlledForm } from './components/ControlledForm'
import { UncontrolledForm } from './components/UncontrolledForm'
import { useState } from 'react'
import { UsestateFetch } from './components/UsestateFetch'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
        <button onClick={handleClick} className="bg-blue-500 rounded-md p-2">Change Status</button>
        {isVisible && <ControlledForm/>}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
        <UncontrolledForm />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
        <UsestateFetch />
      </div>
    </>
  )
}

export default App
