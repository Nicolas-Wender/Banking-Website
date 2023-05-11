export default function Hero() {
  return (
    <div className="relative isolate pt-14 lg:px-8">
      <div className="mx-auto flex align items-center  max-w-7xl justify-between px-6  gap-x-20">

        <div className="text-center max-w-xl md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-8xl">
            Banking starts here.
          </h1>
          <p className="my-6 sm:text-xl text-center md:text-left  leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <ul className="grid grid-cols-1 grid-rows-4 min-[450px]:grid-cols-2 min-[450px]:grid-rows-2 min-[450px]:justify-items-center md:justify-items-start ">
            <li className="p-3">
              <p className="flex gap-3 align-items">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_gray.svg"
                    alt="banquee logo"
                  />
                </span>
                Instant Transfer
              </p>
            </li>
            <li className="p-3">
              <p className="flex gap-3 align-items">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_gray.svg"
                    alt="banquee logo"
                  />
                </span>
                Saving accounts
              </p>
            </li>
            <li className="p-3">
              <p className="flex gap-3 align-items">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_gray.svg"
                    alt="banquee logo"
                  />
                </span>
                Payments worldwide
              </p>
            </li>
            <li className="p-3">
              <p className="flex gap-3 align-items">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_gray.svg"
                    alt="banquee logo"
                  />
                </span>
                100% mobile banking
              </p>
            </li>
          </ul>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-x-4 md:gap-x-6">
            <a
              href="/"
              className="rounded-lg bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Open Account
            </a>
            <a
              href="/"
              className="relative flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold leading-6 text-emerald-500 hover:bg-gray-50
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
            >
              Compare Cards
              <span className="text-emerald-500" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        <div className="hidden max-w-xs lg:block">
          <img className="w-full h-full" src="/images/cards/cards-hero.svg" alt="banquee logo" />
        </div>
      </div>
    </div>
  )
}
