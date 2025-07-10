import './App.css'
import { ControlledForm } from './components/ControlledForm'
import { UncontrolledForm } from './components/UncontrolledForm'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8'>
          <div className='space-y-8'>
            <ControlledForm />
            <div className='border-t pt-8'>
              <UncontrolledForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
