import Home from './components/Home'
import LoginPage from './components/LoginPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUpPage from './components/SignUpPage '
import store from './app/store'
import { Provider } from 'react-redux'
import Cart from './components/Cart'


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
  {
    element: <Cart />,
    path: "/cart",
  },
])
function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </>
  )
}

export default App
