import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }
    body{
        background: ${(props) => props.theme.colors.background};
        font-size: 14px;
        font-family: sans-serif;
    }

 
    .container{
        position: relative;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
       
    }   
    .cards-container{
        position: relative  ;
        top: -100px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 60px;
    }
    
`;
