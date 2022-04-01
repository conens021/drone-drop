import styled from "@emotion/styled";

export const PaymentOptionSelection = styled.div`
    border:1px solid #bfbfbf;
    box-shadow:${props => props.selected &&
        '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'} ;
    border : ${props => props.selected && '1px solid #4FA1B2'};
    padding:1rem;
    width:100%;
    display:flex;
    align-items:center;
    column-gap:1.5rem;
    cursor:pointer;
    transition : all .15s ease-in;
    transform : ${props => props.selected ? 'scale(1.02)' : 'scale(1)'};
    & .circle{
        border-radius:50%;
        width:14px;
        height:14px;
        border : 2px solid ${props => props.selected ? '#4FA1B2' : '#6F6F6F'};
        display:flex;
        align-items:center;
        justify-content:center;
        transition : all .2s ease-in;        
        &  > div{
            transition : all .2s ease-in;        
            border-radius:50%;
            background-color : ${props => props.selected ? '#4FA1B2' : 'transparent'};
            width:8px;
            height:8px;
        }
    }
`;
