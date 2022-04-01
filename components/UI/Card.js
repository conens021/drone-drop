import styled from "@emotion/styled";

export const Card = styled.div`
  border:3px solid transparent;
  border-color: ${(props) => (props.chosen ? "#3CB850" : "transparent")};
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius:30px;
  cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
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
  & .selected {
    position: absolute;
    top: -20px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    padding: 0.3rem 0.4rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    transition: visibility 0.3s ease-in, opacity 0.3s ease-in;
    visibility: ${(props) => (props.chosen ? "visible" : "hidden")};
    opacity: ${(props) => (props.chosen ? "1" : "0")};
  }
`;
