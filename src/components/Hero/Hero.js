import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section id="hero" row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Nick Ang's Personal Portfolio!
        </SectionTitle>
        <SectionText>
          Currently a Dynamics 365 Developer, I hope to be involved in the
          creation and development of life changing software that is used by
          millions of people in their everyday lives
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
