export default function SectionCTA() {
  return (
    <div className="mt-24 relative isolate lg:px-8 w-full ">
      <div className="mx-auto flex flex-col items-center max-w-2xl justify-center px-6 pt-16 ">
        <span className="my-6 sm:text-xl text-center md:text-left  leading-7 font-semibold">
          Account
        </span>
        <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Perfect card for your needs.
        </h1>
        <p className="my-6 sm:text-xl text-center  leading-7 ">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div className="py-10">
          <img
            className="w-auto row-span-2"
            src="/images/cards/tree_cards.svg"
            alt="banquee logo"
          />
        </div>
        <div className="flex gap-4">
          <a
            href="/"
            className="rounded-lg text-center bg-emerald-500 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-emerald-700 "
          >
            Open Account
          </a>
          <a
            href="/"
            className="rounded-lg text-center border-solid border-2 border-gray-200 px-3 py-2.5 text-base font-semibold hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-gray-50 "
          >
            Compare Cards
          </a>
        </div>
      </div>
    </div>
  )
}
