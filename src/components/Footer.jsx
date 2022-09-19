import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/Portfolio/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section started */}

      <footer>
        <div className="container grid grid-four-column">
          {/* First column */}
          <div className="footer-about">
            <div className="footer-logo">
              <NavLink to="/Portfolio/">
              <img src="/public/images/logo.png" alt="logo" />
              </NavLink>
            </div>
            <p>Block 9 Gulistan e Jauhar, Karachi City, Sindh</p>
          </div>

          {/* Second column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* THird column */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a href="https://www.facebook.com/SafdarHussain8455/" target="_blank">
                <FaFacebook className="icons" />
                </a>
              </div>
              <div>
              <a href="https://www.linkedin.com/in/safdarhussain063/" target="_blank">
                <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
              <a href="https://github.com/safdar8455" target="_blank">
                <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/SafdarHussain8455" target="_blank">
                <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://web.whatsapp.com/send?phone=923480296567&text&type=phone_number&app_absent=0" target="_blank">
                <FaWhatsapp className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+92 348 0296567</h3>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
            &copy; {new Date().getFullYear()} Safdar Hussain. All Rights Reserved!
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .footer-logo img{
    height: 4rem;
    margin-left: -1rem;
    filter: invert();
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }

  @media (max-width:${({theme})=>theme.media.mobile}){
    
    

    .contact-short{
      max-width: 95vw;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn{
        text-align: center;
        justify-self: flex-start;
      }
    }
    .footer-bottom--section{
      padding-top: 3.2rem;
    }
  }

`;

export default Footer;
