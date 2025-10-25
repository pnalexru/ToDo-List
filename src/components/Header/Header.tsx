import { useDispatch } from 'react-redux'
import { HeaderContainer, HeaderNavLink, HeaderSyled, HeaderThemeButton, HeaderThemeButtonEl } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {

  const dispatch = useDispatch()

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

        <HeaderThemeButton>
          <HeaderThemeButtonEl onClick={() => { dispatch(toggleThemeAction()) }}>toggle</HeaderThemeButtonEl>
        </HeaderThemeButton>

      </HeaderContainer>
    </HeaderSyled>
  )
}