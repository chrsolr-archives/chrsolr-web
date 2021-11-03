import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const StyledContainer = styled.section`
  padding: ${props => props.theme.spacing.padding.base};
`

const Container = ({ children }: Props) => <StyledContainer>{children}</StyledContainer>

export default Container
