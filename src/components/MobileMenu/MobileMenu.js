/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import IconButton from "../IconButton";

const MobileMenu = ({ isOpen, onDismiss }) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Overlay isOpen={isOpen}>
      <Content>
        <Spacer>
          <IconButtonWrapper>
            <IconButton
              id={"close"}
              size={24}
              label="Close Menu"
              onClick={onDismiss}
            ></IconButton>
          </IconButtonWrapper>
        </Spacer>
        <Navbar>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Navbar>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex: 1;
  justify-content: end;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: None;
  color: ${COLORS.gray[700]};
  font-weight: 500;
`;

const Spacer = styled.div`
  flex: 1;
  display: flex;
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-decoration: None;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-weight: 600;
  font-size: ${18 / 16}rem;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
`;

const IconButtonWrapper = styled.div`
  margin-left: auto;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  height: 100%;
  width: 300px;
  padding: 32px;
  background-color: ${COLORS.white};
`;

export default MobileMenu;
