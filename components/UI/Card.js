import styled from "@emotion/styled";

export const Card = styled.div`
  border:2.5px solid transparent;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius:30px;
  cursor:pointer;
  min-height: ${(props) => props.minHeight}px;
  max-height: ${(props) => props.minHeight}px;
  min-width: ${(props) => props.width}px;
  max-width ${(props) => props.width}px;
  background-color: #EDEDED;
  position: relative;
  transition: 0.6s;
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;
  transform: ${(props) => (props.chosen ? "scale(1.1)" : "scale(1)")};
  box-shadow : ${(props) =>
    props.chosen
      ? "box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);"
      : "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"};

  @media (max-width: 576px) {
    left: ${(props) => props.left}px;
    min-width: ${(props) => props.responsive}px;
    max-width: ${(props) => props.responsive}px;
     }
  
  @media (min-width: 577px) {
    transition : 0.3s;
     
  }

  border-color: ${(props) => (props.chosen ? "green" : "transparent")};
`;
