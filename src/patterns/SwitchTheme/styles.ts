import styled from 'styled-components'

export const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${p => (p.isDark ? '4px' : '2px')} solid ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.primary};
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: all ${({ theme }) => theme.transitions.default};
  overflow: ${p => (p.isDark ? 'visible' : 'hidden')};
  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${p => p.theme.colors.primary};
    border-radius: 50%;
    transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
    opacity: ${p => (p.isDark ? 0 : 1)};
    transition: transform ${({ theme }) => theme.transitions.default};
  }
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${p => p.theme.colors.primary}, 0 23px 0 ${p => p.theme.colors.primary},
      23px 0 0 ${p => p.theme.colors.primary}, -23px 0 0 ${p => p.theme.colors.primary},
      15px 15px 0 ${p => p.theme.colors.primary}, -15px 15px 0 ${p => p.theme.colors.primary},
      15px -15px 0 ${p => p.theme.colors.primary}, -15px -15px 0 ${p => p.theme.colors.primary};
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all ${({ theme }) => theme.transitions.default};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      transform: scale(${p => (p.isDark ? 0.92 : 0)});
    }
  }
`

export const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${p => p.theme.colors.background};
  transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: background ${({ theme }) => theme.transitions.easeInOutQuad},
    color ${({ theme }) => theme.transitions.easeInOutQuad}, transform ${({ theme }) => theme.transitions.default};
`

export const IconWrapper = styled.button<{ isDark: boolean }>`
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${({ theme }) => theme.transitions.default};
  margin-left: 30px;

  &:hover {
    opacity: 0.8;
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.primary};
    background: ${p => p.theme.colors.background};
    border-radius: 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: inline-flex;
    margin-left: 10px;
    &:hover {
      opacity: 0.8;
    }
  }
`
