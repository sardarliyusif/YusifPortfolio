import React, { useState } from "react";
import styled from "styled-components";

import { TitleSection } from "../styles";
import themesColors from "../../../common/constants/themesColors";
import getRandomOnArray from "../../../common/utils/getRandomOnArray";

const SectionWrapper = styled.section`
  line-height: 1.5rem;

  & strong {
    color: ${(props) => props.themeColor ?? "white"};
  }
`;

const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1.5rem 0 3rem 15px;

  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 10px));

  > * {
    position: relative;
    padding-left: 4px;

    :before {
      content: "▹ ";
      position: absolute;
      left: -15px;
      color: ${(props) => props.themeColor ?? "white"};
    }
  }
`;

function AboutSection() {
  let [themeColor, setThemeColor] = useState([themesColors[1]]);

  return (
    <SectionWrapper themeColor={themeColor} className="mt-5 row">
      <div className="col-12 ">
        <TitleSection
          themeColor={themeColor}
          onClick={() => setThemeColor(getRandomOnArray(themesColors))}
        >
          about
        </TitleSection>
      </div>
      <main className="col-md-8">
        <p>
          I have graduated with honors in <strong> Information Technology from Azerbaijan
          Technical University </strong>. I've spent <strong> over a year as a professional
          front-end developer at Remox</strong>. I'm now actively seeking opportunities
          to further my skills and take on new challenges in this field.I'm
          passionate about front-end development, always staying updated with
          the latest trends. I'm a <strong>strong team player</strong> with a <strong>creative
          problem-solving mindset</strong>. I'm eager to <strong>collaborate and continue
          learning</strong>. I'm excited about the possibility of <strong>new opportunities</strong>!
        </p>
        <p>
          The Front-End development is where{" "}
          <strong>I feel 100% comfortable</strong>, but I'm really into any way
          of development that I can use my <strong>creativity</strong> and{" "}
          <strong>problem solving skills</strong>.
        </p>
        <span>Here are some technologies I have been working with:</span>

        <TechList themeColor={themeColor}>
          <li>Html 5</li>
          <li>Javascript</li>
          <li>Css 3</li>
          <li>React JS</li>
          <li>Boostrap 5</li>
          <li>Next JS</li>
          <li>Tailwind Css</li>
          <li>TypeScript</li>
          <li>Sass</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>Redux Toolkit</li>
          <li>Chakra UI</li>
          <li>JIRA</li>
          <li>Git</li>
          <li>Jquery</li>
          <li>Github</li>
          <li>REST API</li>
          <li>Gitlab</li>
          <li>Figma</li>
          <li>NPM</li>
          <li>Yarn</li>
        </TechList>
      </main>
    </SectionWrapper>
  );
}

export default AboutSection;
