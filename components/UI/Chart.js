import styled from '@emotion/styled'

export const Chart = styled.div`
  height : ${props => props.size}%;
  width: 8px;
  max-height: 100%;
  min-height:5px;
  background-color: red;
  transition:height 0.3s ease-in;
`
