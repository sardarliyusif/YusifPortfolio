import React, { useState } from "react";
import styled from "styled-components";

import Dude from "../../../common/components/Dude";
import themesColors from "../../../common/constants/themesColors";

import { AiFillLinkedin , AiFillGithub , AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

function HeroSection() {
  let [themeColor, setThemeColor] = useState([themesColors[0]]);
  return (
    <Wrapper>
      <div className="h-100 d-flex flex-column align-items-center align-items-md-start justify-content-center">
        <section className="d-fle w-100 flex-column align-items-center d-md-block text-center text-md-start">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-9">
              <div>
                <MainTitle className="mb-2">
                  hi, <SpanTheme themeColor={themeColor}> Yusif </SpanTheme>{" "}
                  here.
                </MainTitle>
                <SecondaryTitleTheme themeColor={themeColor}>
                  I build stuff sometimes.
                </SecondaryTitleTheme>
              </div>
              <HeroTextContainer className="pt-4 pb-4 pb-md-5">
                I'm a front-end developer based in Azerbaijan and I love
                learning everything that helps me to express my creativity.
              </HeroTextContainer>
              <AnchorTheme
                themeColor={themeColor}
                href="https://api.whatsapp.com/send?phone=994552249105"
                target="_blank"
                rel="noreferrer"
                className="btn px-5 py-3 mb-3 me-md-3"
              >
                Say hello
              </AnchorTheme>
              <AnchorTheme
                themeColor={themeColor}
                href="https://drive.google.com/file/d/1GCYnpl5gpDBS96SCVTEZJCW8r_0W25Nn/view"
                download
                target="_blank"
                className="btn px-5 py-3 mb-3"
              >
                CV
              </AnchorTheme>
              <SocialLinks className="socials">
              <AnchorTheme
                themeColor={themeColor}
                href="https://github.com/sardarliyusif"
                download
                target="_blank"
                className="btn px-4 py-2 social-link me-3"
              >
                <AiFillGithub/>
              </AnchorTheme>
              <AnchorTheme
                themeColor={themeColor}
                href="https://www.linkedin.com/in/yusifsardarli/"
                download
                target="_blank"
                className="btn px-4 py-2 social-link me-3"
              >
                <AiFillLinkedin/>
              </AnchorTheme>
              <AnchorTheme
                themeColor={themeColor}
                href="https://t.me/sardarov_0"
                download
                target="_blank"
                className="btn px-4 py-2 social-link me-3"
              >
                <FaTelegram/>
              </AnchorTheme>
              <AnchorTheme
                themeColor={themeColor}
                href="https://www.instagram.com/sardarliyusif/"
                download
                target="_blank"
                className="btn px-4 py-2 social-link"
              >
                <AiFillInstagram/>
              </AnchorTheme>
              </SocialLinks>
              
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <div className="mb-5 mb-md-0">
                <Dude
                  className="anxious-boy"
                  themeColor={themeColor}
                  setThemeColor={setThemeColor}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;

const SpanTheme = styled.span`
  color: ${(props) => props.themeColor ?? "red"};
`;

const SecondaryTitleTheme = styled.h2`
  color: ${(props) => props.themeColor ?? "red"};
`;

const AnchorTheme = styled.a`
  font-weight: bold;

  border: 1px solid ${(props) => props.themeColor ?? "red"};
  color: ${(props) => props.themeColor ?? "red"};

  :hover {
    transition: all 0.4s;
    color: black;
    background-color: ${(props) => props.themeColor ?? "red"};
  }
  
`;
const SocialLinks = styled.div`
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .social-link{
      width: 40%;
      margin: 0.25rem 0.25rem !important;
    }
    
  }
`;



const MainTitle = styled.h1`
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroTextContainer = styled.p`
  max-width: 500px;
`;

export default HeroSection;
