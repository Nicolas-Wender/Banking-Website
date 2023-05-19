export default function SectionFeatureSpecifcB() {
  return (
    <div className="md:mt-20 relative isolate lg:px-8 w-full h-[30rem] md:h-[37rem]">
      <div className="mx-auto flex align max-w-7xl justify-between px-6 pt-16 gap-x-20 ">
        <div className="text-center max-w-xl md:text-left">
        <span className="my-6 sm:text-xl text-center md:text-left  leading-7 font-semibold">
            Notifications
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Banking starts here.
          </h1>
          <p className="my-6 sm:text-xl text-center md:text-left  leading-7 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <ul className="grid grid-cols-1 grid-rows-4 min-[450px]:justify-items-center md:justify-items-start ">
            <li className="p-3">
              <p className="flex gap-3 align-items text-xl">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_green.svg"
                    alt="banquee logo"
                  />
                </span>
                Instant Transfer
              </p>
            </li>
            <li className="p-3">
              <p className="flex gap-3 align-items text-xl">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_green.svg"
                    alt="banquee logo"
                  />
                </span>
                Saving accounts
              </p>
            </li>
            <li className="p-3">
              <p className="flex gap-3 align-items text-xl">
                <span>
                  {' '}
                  <img
                    className="w-auto"
                    src="/images/check_green.svg"
                    alt="banquee logo"
                  />
                </span>
                Payments worldwide
              </p>
            </li>
          </ul>

          <a
            href="/"
            className="relative items-center gap-2 rounded-lg px-3.5 py-2.5 text-xl font-semibold leading-6 text-emerald-500 hover:bg-gray-50
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
          >
            Compare Cards
            <span className="text-emerald-500" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <div
          className="hidden mx-auto max-w-xl
         lg:block"
        >
          {[...Array(5)].map((x, i) => (
            <div key={i} className="bg-slate-100 mt-3 w-96 px-6 py-4 rounded-xl justify-between flex items-center gap-3">
              <img
                className="w-auto row-span-2"
                src="/images/app-icon.svg"
                alt="banquee logo"
              />
              <div className="text-left mr-auto font-semibold">
                <span className="block">Apple</span>
                <span className="">Macbook</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
