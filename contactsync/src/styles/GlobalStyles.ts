import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        //Collor Palette
        --prussian-blue: #003049ff;
        --fire-engine-red: #d62828ff;
        --orange-wheel: #f77f00ff;
        --xanthous: #fcbf49ff;
        --vanilla: #eae2b7ff;

        font-size: 60%;   
    }

    /* font-size: 16px;
    1rem = 10px
    */

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: var(--vanilla)
    }

    /* button {
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        color: black;
        border: 1px solid black;
        padding: 7px;
        border-radius: var(--border-radius);
    }
    
    input{
        border: 1px solid black;
        padding: 7px 7px 7px 10px;
        border-radius: var(--border-radius);
    }  */

`;

