import React from 'react'
import { FooterContainer, FooterItems, HNlink } from './footer.styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>Privacy & Cookies</FooterItems>
      <FooterItems>Terms and Conditions</FooterItems>

      <FooterItems>Architected with ❤️ by Organisers</FooterItems>

      <FooterItems>
        <HNlink href={'https://Autumnofcode.com/'}>Autumnofcode.com</HNlink>
      </FooterItems>
    </FooterContainer>
  )
}
