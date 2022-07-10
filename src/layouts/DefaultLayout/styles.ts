import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 1184px;
  min-height: calc(100vh - 6.25rem);

  margin: 50px auto;
  padding: 40px;

  border-radius: 8px;
  background: ${props => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
`