import { HeaderContainer, HeaderNavLink, HeaderSyled } from './Header.styled'

export const Header = () => {

  return (
    <HeaderSyled>
      <HeaderContainer>
        <HeaderNavLink
          to={'/'}
          end
        >ToDo</HeaderNavLink>
        <HeaderNavLink
          to={'/list'}
        >List</HeaderNavLink>

      </HeaderContainer>
    </HeaderSyled>
  )
}