import styled from 'styled-components'

interface ContentProps {
  positionX: string
  positionY: string
}

export const Content = styled.div.attrs((props: ContentProps) => ({
  style: {
    transform: `rotateX(${props.positionX}deg) rotateY(${props.positionY}deg)`
  }
}))`
  width: fit-content;
  transition: transform ${({ theme }) => theme.transitions.easeInOutQuad};
`
