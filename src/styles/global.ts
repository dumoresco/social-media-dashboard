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
        transition: 0.5s background;
        overflow: hidden;
    }

    .overview-title{
        color:${(props) => props.theme.colors.subtitle};
        position: relative;
        top: -50px
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
    .card-overview-container{
        position: relative  ;
        top: -20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px 60px;
    }
    
`;
