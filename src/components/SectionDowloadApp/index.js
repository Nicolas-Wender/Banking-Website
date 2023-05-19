export default function SectionDowloadApp() {
  return (
    <div className="mt-20 relative isolate lg:px-8 w-full h-[30rem] md:h-[37rem]">
      <div className="mx-auto flex max-w-7xl justify-between h-[30rem] md:h-[37rem] overflow-hidden px-10 md:px-20  gap-x-20 bg-[#5BB5A2] md:rounded-3xl">
        <div className="text-center pt-16 md:pt-24 max-w-xl md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-7xl">
            Banking starts here.
          </h1>
          <p className="my-6 sm:text-xl text-center md:text-left  leading-7 text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <ul className="grid grid-cols-2 grid-rows-2 min-[450px]:justify-items-center md:justify-items-start text-gray-100 ">
            <li className="py-3">
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
            <li className="py-3">
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
            <li className="py-3">
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
            <li className="py-3">
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
          </ul>
          <div className="flex gap-10 mt-6 ">
            <a href="/" className="w-44">
              <img
                className="w-full h-full"
                src="/images/AppleStore.svg"
                alt="banquee logo"
              />
            </a>
            <a href="/" className="w-44">
              <img
                className="w-full h-full"
                src="/images/GoogleStore.svg"
                alt="banquee logo"
              />
            </a>
          </div>
        </div>

        <div className="mx-auto hidden lg:block">
          <img
            className="mt-32 w-full h-full"
            src="/images/app_image/app.svg"
            alt="banquee logo"
          />
        </div>
      </div>
    </div>
  )
}
