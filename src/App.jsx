import './App.css'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUpPage from './components/SignUpPage '


const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <SignUpPage />,
    path: "/signup",
  },
])
function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
