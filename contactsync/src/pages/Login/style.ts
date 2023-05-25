import styled from "styled-components"

export const SectionLogo = styled.section`
    width: 90vw;
    max-width: 300px;
    height: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;

    h1 {
        font-size: 30px;
        color: var(--vanilla);
        margin-bottom: 10px;
    }

    p {
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }

    span {
        color: var(--fire-engine-red);
        font-weight: bold;
    }
`

export const SectionLogin = styled.section`
    width: 90vw;
    max-width: 300px;
    height: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--xanthous);
    border-radius: 20px;

    h2 {
        font-size: 18px;
    }
`