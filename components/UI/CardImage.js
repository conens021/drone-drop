import styled from "@emotion/styled";

export const CardImage = styled.div`
  & .imageContainer {
    position: relative;
    width: ${(props) => props.width}px;
    min-width: ${(props) => props.minWidth}x;
    height: ${(props) => props.height}px;
    max-height: ${(props) => props.height}px;
  }

  & .imageContainer > div {
    position: unset !important;
  }

  & .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media (max-width: 600px) {
    height: ${(props) => props.height}px;
    max-height: ${(props) => props.height}px;
  }
`;
