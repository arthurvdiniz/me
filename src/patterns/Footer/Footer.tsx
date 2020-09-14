import React from 'react'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import { FaInstagram, FaMediumM, FaLinkedinIn } from 'react-icons/fa'

import { Container } from './styles'

function Footer(): React.ReactElement {
  return (
    <Container>
      <a href="https://github.com/arthurvdiniz" target="_blank" rel="noreferrer">
        <FiGithub size="1.2em" />
      </a>
      <a href="https://linkedin.com/in/arthurvdiniz/" target="_blank" rel="noreferrer">
        <FaLinkedinIn size="1.2em" />
      </a>
      <a href="https://twitter.com/unknownviros" target="_blank" rel="noreferrer">
        <FiTwitter size="1.2em" />
      </a>
      <a href="https://instagram.com/arthurvdiniz/" target="_blank" rel="noreferrer">
        <FaInstagram size="1.2em" />
      </a>
      <a href="https://medium.com/@arthurvdiniz" target="_blank" rel="noreferrer">
        <FaMediumM size="1.2em" />
      </a>
      <a href="mailto:arthurvdinizs@gmail.com" target="_blank" rel="noreferrer">
        <FiMail size="1.2em" />
      </a>
    </Container>
  )
}

export default React.memo(Footer)
