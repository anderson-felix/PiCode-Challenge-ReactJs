import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    @media (max-width:1080px) {
        html {
            font-size: 93.75%;
        }  
    }
    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }
    body, input, textarea, select, button {
        font: 400 1rem "Poppins", sans-serif;
    }
`