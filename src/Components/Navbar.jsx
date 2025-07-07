import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-300 py-3">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 md:py-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">Exclusive</h1>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-sm font-medium border-b-2 border-black text-gray-900">Home</a>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">Contact</a>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">About</a>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">Sign Up</a>
              </div>

              
              <div className="hidden md:flex items-center gap-3">
                <div className="relative w-50">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full rounded pl-2 pr-8 py-1.5 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 focus:outline-none"
                  />
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-1 top-2" />
                </div>
                <HeartIcon className="h-6 w-6 text-black cursor-pointer" />
                <ShoppingCartIcon className="h-6 w-6 text-black cursor-pointer" />
                <UserIcon className="h-6 w-6 text-black cursor-pointer" />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <Disclosure.Panel className="md:hidden px-4 pt-2 pb-4 space-y-3">
            {/* Nav Links */}
            <Disclosure.Button as="a" href="#" className="block text-base font-medium text-gray-700">
              Home
            </Disclosure.Button>
            <Disclosure.Button as="a" href="#" className="block text-base font-medium text-gray-700">
              Contact
            </Disclosure.Button>
            <Disclosure.Button as="a" href="#" className="block text-base font-medium text-gray-700">
              About
            </Disclosure.Button>
            <Disclosure.Button as="a" href="#" className="block text-base font-medium text-gray-700">
              Sign Up
            </Disclosure.Button>

            {/* Mobile: Search Bar */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full rounded pl-3 pr-10 py-1.5 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 focus:outline-none"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-2 top-2" />
            </div>

            {/* Mobile: Icons */}
            <div className="flex items-center gap-4 pt-2">
              <HeartIcon className="h-6 w-6 text-black cursor-pointer" />
              <ShoppingCartIcon className="h-6 w-6 text-black cursor-pointer" />
              <UserIcon className="h-6 w-6 text-black cursor-pointer" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;
