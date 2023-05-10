import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const blog = ['Produtos', 'Tecnologia', 'Crypto']

const cards = [
  {
    name: 'Basic',
    describe: 'Lorem ipsum dolor',
    image: '/images/cards/Basic.svg'
  },
  {
    name: 'Premium',
    describe: 'Lorem ipsum dolor',
    image: '/images/cards/Premium.svg'
  },
  {
    name: 'Gold',
    describe: 'Lorem ipsum dolor',
    image: '/images/cards/Gold.svg'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="/images/logo.svg"
              alt="banquee logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Barra de navegação */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Cards
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="mx-auto max-w-7xl absolute left-1/2 -translate-x-1/2  top-full z-10 mt-3 p-5 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex items-center justify-center gap-10">
                  {cards.map(item => (
                    <a
                      href="/"
                      key={item.name}
                      className="relative w-48 flex flex-col items-center rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <h1 className="text-bold font-bold">{item.name}</h1>
                      <p className="py-1.5 text-gray-500">{item.describe}</p>
                      <img
                        className="h-full w-40"
                        src={item.image}
                        alt="banquee logo"
                      />
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Support
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Blog
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {blog.map(item => (
                    <a
                      href="/"
                      key={item.name}
                      className="relative flex items-center rounded-lg p-4 py-2 text-sm leading-6 hover:bg-gray-50 hover:"
                    >
                      <div>{item}</div>
                    </a>
                  ))}
                  <a
                    href="/"
                    className="relative flex items-center gap-2 rounded-lg p-4 py-2 text-sm font-semibold leading-6 text-emerald-500 hover:bg-gray-50"
                  >
                    Todos os Artigos
                    <span className="text-emerald-500" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-7">
          <a
            href="/"
            className="rounded-lg text-center w-32 px-3 py-2.5 text-base font-semibold text-emerald-500 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-gray-50 "
          >
            Log in
          </a>
          <a
            href="/"
            class="rounded-lg text-center bg-emerald-500 w-32 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-emerald-700 "
          >
            Open Account
          </a>
        </div>
      </nav>

      {/* Menu Mobile */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cards
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Blog
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {blog.map(item => (
                          <div
                            key={item}
                            className="relative flex items-center rounded-lg p-4 py-2 text-sm leading-6 hover:bg-gray-50 hover:"
                          >
                            <div>{item}</div>
                          </div>
                        ))}
                        <a
                          href="/"
                          className="relative flex items-center gap-2 rounded-lg p-4 py-2 text-sm font-semibold leading-6 text-emerald-500 hover:bg-gray-50"
                        >
                          Todos os Artigos
                          <span className="text-emerald-500" aria-hidden="true">
                            &rarr;
                          </span>
                        </a>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6 flex justify-center gap-10">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg text-center w-32 px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Log in
                </a>
                <a
                  href="/"
                  class="rounded-lg text-center bg-emerald-500 w-32 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-emerald-700 "
                >
                  Open Account
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
