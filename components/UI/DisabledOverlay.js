import styled from "@emotion/styled";

export const DisabledOverlay = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-color:rgb(13, 13, 13,0.87);
    color:white;
    border:2.5px solid black;
    border-radius:30px;
    z-index:3;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:2rem;
    line-height:1.5rem;
`;
