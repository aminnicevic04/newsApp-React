// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink onClick={() => navigate("/about")}>Founders</FooterLink>
            <FooterLink onClick={() => navigate("/about")}>
              Service - Team
            </FooterLink>
            <FooterLink onClick={() => navigate("/about")}>
              Testimonials
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink onClick={() => navigate("/contact")}>
              Writing
            </FooterLink>
            <FooterLink onClick={() => navigate("/contact")}>
              Reports
            </FooterLink>
            <FooterLink onClick={() => navigate("/contact")}>
              Sugestions
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink onClick={() => navigate("/contact")}>
              help@gmail.com
            </FooterLink>
            <FooterLink onClick={() => navigate("/contact")}>
              internship@info.com
            </FooterLink>
            <FooterLink>+381 1123123</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.linkedin.com/in/amin-nicevic/">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  LinkedIn
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://github.com/aminnicevic04">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Github
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
