import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import ResourcesEl from "../components/Resources/Resources";
import ResourcesCard from "../components/ResourcesCard/ResourcesCard";
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Resources } from "../constants/constants"

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <ResourcesEl />
      {
        Resources.map((el, index)=>(
          <ResourcesCard element={el} key={index}></ResourcesCard>
        ))
      }
    </Layout>
  );
};

export default Home;
