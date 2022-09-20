import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { useGlobalContext } from "../context";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSection = () => {
  const { name, image, para, title } = useGlobalContext();
  const [text] = useTypewriter({
    words: ['React.js Developer', 'Designer', `${name}`,],
    loop: 0, // Infinit
    
  })
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">{title}</p>
          <h1 className="hero-heading">I'm <span>{text}</span><Cursor /></h1>
          <p className="hero-para">{para}</p>
          <div className="hero-btn">
            <Button className="btn hireme-btn hero-btn">
              <NavLink to="/Portfolio/contact">hire me</NavLink>
            </Button>
            <Button className="hero-btn">
              <a href="https://drive.google.com/file/d/1LWDCLL4VZRRtNc5Ks73v3KMYFmoa29hy/view?usp=sharing">
                Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero img" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-btn{
    margin: 0 .5rem;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: capitalize;
    font-size: 6.4rem;
    font-weight: 700;
    span{
      color: rgb(98 84 243);
    }

  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
    .hero-img {
      max-width: 95%;
    }
  }
`;

export default HeroSection;
