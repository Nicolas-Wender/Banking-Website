export default function Section_feature_specifc_A() {
  return (
    <div className="mt-24 md:mt-36 relative isolate lg:px-8 w-full bg-green-50 overflow-hidden h-[30rem] md:h-[37rem]">
      <div className="mx-auto flex align items-center  max-w-7xl justify-between px-6 pt-16 gap-x-20 ">
        <div className="text-center max-w-xl md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Banking starts here.
          </h1>
          <p className="my-6 sm:text-xl text-center md:text-left  leading- ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <ul className="grid grid-cols-1 grid-rows-4 min-[450px]:justify-items-center md:justify-items-start ">
            <li className="p-3">
              <p className="flex gap-3 align-items">
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
              <p className="flex gap-3 align-items">
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
              <p className="flex gap-3 align-items">
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
        </div>

        <div
          className="hidden mx-auto max-w-xl
         lg:block"
        >
          {[...Array(6)].map((x, i) => (
            <div key={i} className="bg-slate-50 mt-3 w-96 px-6 py-4 rounded-xl justify-between flex items-center gap-3 shadow-lg">
              <img
                className="w-auto row-span-2"
                src="/images/apple.svg"
                alt="banquee logo"
              />
              <div className="text-left mr-auto">
                <span className="block">Apple</span>
                <span className="text-gray-500">Macbook</span>
              </div>
              <span className="text-xl">-999$</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
