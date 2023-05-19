import Header from '../../components/Header'
import Hero from '../../components/Hero'
import SectionFeatureBlockA from '../../components/SectionFeatureBlockA'
import SectionFeatureSpecifcA from '../../components/SectionFeatureSpecifcA'
import SectionFeatureBlocksB from '../../components/SectionFeatureBlocksB'
import SectionFeatureSpecifcB from '../../components/SectionFeatureSpecifcB'
import SectionCTA from '../../components/SectionCTA'
import SectionTestemonials from '../../components/SectionTestemonials'
import SectionDowloadApp from '../../components/SectionDowloadApp'



export default function Inicio() {
  return (
    <>
      <Header />
      <Hero />
      <SectionFeatureBlockA />
      <SectionFeatureSpecifcA />
      <SectionFeatureBlocksB />
      <SectionFeatureSpecifcB />
      <SectionCTA />
      <SectionTestemonials/>
      <SectionDowloadApp/>
      <SectionFeatureSpecifcA />
    </>
  )
}
