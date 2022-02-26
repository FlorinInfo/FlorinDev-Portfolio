import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello, I am Bucataru Florin, a passionate self-taught Full Stack web developer and a freelance software engineer from Romania.</SectionText>
        <Link href="#contact"><Button >Contact me</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;