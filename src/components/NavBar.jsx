import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Product', href: '/product', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const NavBar = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
    return (
        <Disclosure as="nav" className="bg-[#00717C] ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-[#221034] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <h3 className='text-white '>
                        <span className='font-bold text-2xl '>S</span>nap
                        <span className='font-bold text-2xl'>S</span>tash</h3>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current ? 'bg-[#221034] text-white' : 'text-gray-100 hover:bg-gray-900 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to={"/cart"}>
                        <button
                            type="button"
                          className="relative rounded-full  p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View Cart</span>
                          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </Link>
                    <span className="absolute inline-flex items-center rounded-md i bg-black-500 px-2 py-1 mb-5 ml-3 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">0</span>
                     <div className='text-white font-bold'>
                      {isAuthenticated ? "Logout" :"Login"   }</div>                 
                      
                      
                  </div>
                </div>
              </div>
    
              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      )
}

export default NavBar