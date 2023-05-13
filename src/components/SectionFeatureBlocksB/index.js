const features = [
  {
    icone: '/images/Icons_Section_feature_blocks_B/laptop.svg',
    title: 'New Laptop',
    price: '400$',
    bg: 'bg-green-50'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_B/bicycle.svg',
    title: 'Dream Bike',
    price: '200$',
    bg: 'bg-red-100'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_B/airplane.svg',
    title: 'Holiday',
    price: '14000$',
    bg: 'bg-indigo-100'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_B/camera.svg',
    title: 'Camera',
    price: '100$',
    bg: 'bg-blue-100'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_B/more.svg',
    title: '',
    price: '',
    bg: 'bg-slate-50'
  }
]

export default function SectionFeatureBlocksB() {
  return (
    <div className="mt-20 md:mt-36 relative isolate lg:px-8 w-full overflow-hidden">
      <div className="mx-auto flex flex-col align items-center md:items-start  max-w-7xl justify-center px-6 pt-16 gap-x-20 ">
        <div className="text-center max-w-xl md:text-left">
          <span className="my-6 sm:text-xl text-center md:text-left  leading-7 ">
            Saving Accounts
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-8xl">
            Organize your money the right way
          </h1>
        </div>

        <div className="w-full my-6 flex flex-col md:flex-row flex-wrap-reverse justify-between items-center">
          <p className="max-w-xl flex justify-between sm:text-xl text-center md:text-left leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="/"
            className="relative items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold leading-6 text-emerald-500 hover:bg-gray-50
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
          >
            Compare Cards
            <span className="text-emerald-500" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <div className="my-6 flex flex-wrap gap-x-10 max-[320px]:px-8 max-[425px]:px-16 md:w-full">
          {features.map(feature => (
            <div className="mb-12">
              <div
                key={feature.title}
                className={
                  'rounded-xl shadow-md w-52 h-52 flex flex-col justify-center items-center md:items-start ' +
                  feature.bg
                }
              >
                <img
                  className="w-16 m-auto"
                  src={feature.icone}
                  alt="banquee logo"
                />
              </div>
              <h2 className="font-medium text-xl mt-5">{feature.title}</h2>
              <p className="font-medium text-base">{feature.price}</p>
            </div>

            
          ))}
        </div>
      </div>
    </div>
  )
}
