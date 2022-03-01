import styled from '@emotion/styled'

export const ChartLabel = styled.div`
  box-shadow: ${props => props.selected ? 
     '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)' : ''};
  padding: 0.7rem 2.3rem;
  cursor: pointer;
`
