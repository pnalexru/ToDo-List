import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderSyled = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`
export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

  &.active  {
    color: #ffffff33
  }
`
export const HeaderThemeButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    border: none;

    top: 50%;
    transform: translateY(-50%);
  `

export const HeaderThemeButtonEl = styled.button`
    background: #fff;
    margin: 0;
  `