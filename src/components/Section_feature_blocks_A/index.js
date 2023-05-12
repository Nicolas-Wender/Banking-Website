const features = [
  {
    icone: '/images/Icons_Section_feature_blocks_A/raio.svg',
    title: 'Instant transactions',
    description:
      'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_A/cofre.svg',
    title: 'Saving accounts',
    description:
      'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_A/celular.svg',
    title: 'Mobile banking',
    description:
      'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_A/metricas.svg',
    title: 'Advanced statistics',
    description:
      'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_A/cartao.svg',
    title: 'Virtual cards',
    description:
      'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.'
  },
  {
    icone: '/images/Icons_Section_feature_blocks_A/wifi.svg',
    title: 'Contactless payments',
    description:
      'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.'
  }
]

export default function Section_feature_blocks_A() {
  return (
    <div className="relative isolate mt-28 md:mt-52 lg:px-8">
      <div className="mx-auto flex align items-center  max-w-7xl justify-between px-6  gap-x-20">
        <div className="text-center max-w-xl md:text-left">
          <h1 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-8xl">
            One app. One banking.
          </h1>

          <div className="my-6 grid gap-10 
          grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 max-[320px]:px-8 max-[425px]:px-16 md:max-w-lg">
            {features.map(feature => (
              <div key={feature.title} className="border-solid border-2 border-gray-200 rounded-xl p-5 flex flex-col justify-center items-center md:items-start">
                <img
                  className="w-10"
                  src={feature.icone}
                  alt="banquee logo"
                />
                <h2 className="font-medium text-base py-3">{feature.title}</h2>
                <p className="font-medium text-xs" >{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto hidden max-w-xs lg:block">
          <img
            className="w-full h-full"
            src="/images/app_image/app.svg"
            alt="banquee logo"
          />
        </div>
      </div>
    </div>
  )
}
