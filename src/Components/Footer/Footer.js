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

const Footer = () => {
  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Founders</FooterLink>
            <FooterLink href="#">Service - Team</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Reports</FooterLink>
            <FooterLink href="#">Sugestions</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">help@gmail.com</FooterLink>
            <FooterLink href="#">internship@info.com</FooterLink>
            <FooterLink href="#">+381 1123123</FooterLink>
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
