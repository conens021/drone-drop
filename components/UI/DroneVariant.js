import styled from "@emotion/styled";

export const DroneVariant = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: pointer;
  border: 3px solid transparent;
  border-color: ${(props) => (props.selected ? "#3CB850" : "")};
  transition: border-color 0.3s ease-in;
  position: relative;
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
    visibility: ${(props) => (props.selected ? "visible" : "hidden")};
    opacity: ${(props) => (props.selected ? "1" : "0")};
  }
`;
