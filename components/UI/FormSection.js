import styled from "@emotion/styled";

export const FormSection = styled.section`
    width:100%;
    position:absolute;
    opacity: ${props => props.active ? 1 : 0};
    top:0;
    left:${props => props.active ? '0' : '-100%'};
    transition:${props => props.active ? 'left ease-in-out .3s, opacity ease-in .5s' :
        'left ease-in-out .3s 1s,opacity ease-out'
    };

    & h4{
        text-transform: uppercase;
    }

`