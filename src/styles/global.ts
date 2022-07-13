import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
:root{
    --backgroud:#f0f2f5;
    --red:#E52E4D;
    --blue:#5429CC;
    --gren: #33CC95;

    --blue-light:#6933FF;
    --text-title:#363D5D;
    --text-body:#969CB3;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
}

html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

body{
    background: var(--backgroud);
    -webkit-font-smoothing: antialiased;
}

border-style, input, textarea, button{
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6{
    font-weight: 600;
} 
strong{
    font-weight: 500;
}

button{
    cursor:pointer;
}

[disabled]{
    opacity: 0.6;
    cursor:not-allowed;
}

.react-modal-overlay{
    background: rgba(0,0,0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.react-modal-content{
    width: 100%;
    max-width:576px;
    background: var(--backgroud);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
}
`