import Home from './components/Home'
import LoginPage from './components/LoginPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUpPage from './components/SignUpPage '
import store from './app/store'
import { Provider } from 'react-redux'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import ProductList from './components/ProductList'


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
    element: <ProductList />,
    path: "/product",
  },
  {
    element: <Cart />,
    path: "/cart",
  },
  {
    element: <Checkout />,
    path: "/checkout",
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
