import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import BigProccess from './components/BigProccess'
import MainLayout from './components/MainLayout/MainLayout'
import SolveBigProccess from './components/SolveBigProccess'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
          path: 'counter-bigtime',
          element: <BigProccess />
        },
        {
          path: 'counter-solution',
          element: <SolveBigProccess />
        },
        
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
