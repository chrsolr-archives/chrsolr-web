import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  brandName: string
}

const StyledNavigation = styled.section`
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.375rem;
    background-color: ${(props) => props.theme.colors.grey[0]}; 
    padding: ${(props) => props.theme.spacing.padding.base};
    box-shadow: 0 0px ${props => props.theme.spacing.levels.xs} rgba(0,0,0,0.1);
    font-weight: ${(props) => props.theme.typography.fontWeigths.bold};
  }

  aside {
    position: absolute;
    top: 4.375rem;
    right: 0;
    min-height: 100vh;
    min-width: 33%;
    text-align: center;
    background-color: ${(props) => props.theme.colors.grey[100]};
    padding: ${(props) => props.theme.spacing.padding.base};

    span {
      display: block;

      &::first-child {
      }

      &::last-child {
      }
    }

    ul {
      list-style-type: none;

      a {
        text-decoration: none;
      }
    }
  }
`

const NavigationMenu = ({ brandName }: Props) => (
  <>
    <StyledNavigation>
      <nav>
        <span>{brandName}</span>
        <span>ICON MENU</span>
      </nav>

      <aside>
        <span>navigation: PAGE_NAME_HERE</span>
        <span>&there4;</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </aside>
    </StyledNavigation>
  </>
)

export default NavigationMenu
