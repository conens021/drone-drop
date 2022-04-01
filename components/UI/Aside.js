import styled from '@emotion/styled'

export const Aside = styled.div`
 color:white;
 position:absolute;
 top:0;
 left:${props => props.active ? '0' : '-100%'};
 min-height:100vh;
 max-height:100vh;
 overflow:scroll;
 width:100%;
 background-color: #0D0D0D;
 display:flex;
 flex-direction: column;
 row-gap:3rem;
 z-index:50;
 padding:2rem 2.2rem 5rem;
 justify-content:stretch;
 align-items:stretch;

 transition : all .3s ease-in;

 & .top{
     display:flex;
     align-items:center;
     justify-content: space-between;
     
     & .close-icon{
      background-image : url('/images/icons/sidebar-close.png');
      background-size:cover;
      height:32px;
      width:32px;
      transition: all .5s ease-in;
      transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};
     }

     & .sidebar-logo{
         font-size: 3rem;

         & h3{
             padding:0;
             margin:0 !important;
         }
     }
 }

 & .sidebar-items{
   flex:1;
   display:flex;
   flex-direction:column;
   row-gap:2rem;
   justify-content:space-around;
   padding:3rem 0;

   & li{
       font-size: 1.2rem;
       text-transform:uppercase;
   }
 }

 & .sidebar-button{
    display:flex;
    justify-content:center;

   & button{
    color:white;
    text-transform:capitalize;
    position: relative;
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 16px 32px 15px;
    outline: 0;
    border: 1px solid white;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &::after{
        content: "";
        background-color: #99a7f0;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.2s;
    }

    &:hover:after{
        top: 0px;
        left: 0px;
    }
   }

 }

`
