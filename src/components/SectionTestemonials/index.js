const testemonials = [
  {
    titulo: 'Sunt qui esse pariatur duis deserunt mollit ',
    depoimento:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
    pessoa: 'Cody Fisher',
    ocupacao: 'Medical Assistant'
  },
  {
    titulo: 'At lectus urna duis convallis tellus',
    depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.',
    pessoa: 'Jenny Wilson',
    ocupacao: 'Nursing Assistant'
  },
  {
    titulo: 'Elit aute irure tempor cupidatat incididunt',
    depoimento:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
    pessoa: 'Guy Hawkins',
    ocupacao: 'President of Sales'
  },
  {
    titulo: 'Sunt qui esse pariatur duis deserunt mollit ',
    depoimento:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
    pessoa: 'Cody Fisher',
    ocupacao: 'Medical Assistant'
  },
  {
    titulo: 'Donec et fringilla neque',
    depoimento:
      'Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.',
    pessoa: 'Darlene Robertson',
    ocupacao: 'Dog Trainer'
  },
  {
    titulo: 'Etiam accumsan porta neque eros',
    depoimento:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
    pessoa: 'Dianne Russell',
    ocupacao: 'Medical Assistant'
  }
]

export default function SectionTestemonials() {
  return (
    <div className="mt-20 md:mt-36 relative isolate lg:px-8 w-full overflow-hidden">
      <div className="mx-auto flex flex-col align items-center md:items-start  max-w-7xl justify-center px-6 pt-16 gap-x-20 ">
        <div className="text-center w-full md:text-left">
          <span className="my-6 sm:text-2xl font-semibold text-center md:text-left leading-7 ">
            Saving Accounts
          </span>
          <div className="my-6 flex flex-col md:flex-row flex-wrap justify-between items-end">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-8xl max-w-xl">
              Organize your money the right way
            </h1>
            <p
              href="/"
              className="flex relative items-center gap-2 rounded-lg px-3.5 py-2.5 text-xl font-semibold leading-6
              "
            >
              <span aria-hidden="true">
                <img
                  className="w-10"
                  src="images/badge.svg"
                  alt="banquee logo"
                />
              </span>
              Rated <span className="text-emerald-500">4.8/5</span> from over
              1000 users
            </p>
          </div>
        </div>

        <div className="my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-5 md:w-full">
          {testemonials.map((testemonial, i)=> (
            <div
              key={testemonial.i}
              className="hidden border-solid border-2 border-gray-200 rounded-xl p-5 md:flex flex-col justify-start items-start"  
            >
              <img
                className="w-30"
                src="images/rating.svg"
                alt="banquee logo"
              />
              <h1 className="font-medium text-3xl py-3">
                {testemonial.titulo}
              </h1>
              <p className="font-medium text-xl py-3">{testemonial.depoimento}</p>
              <p className="text-xl font-medium">{testemonial.pessoa}</p>
              <span className="text-base ">{testemonial.ocupacao}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
