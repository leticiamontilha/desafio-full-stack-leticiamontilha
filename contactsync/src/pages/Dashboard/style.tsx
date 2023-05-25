import styled from "styled-components"


export const SectionStyled = styled.section`
    width: 100vw;
    /* max-width: 300px; */
    height: 100vh;
    margin-top: 25px;

    display: flex;
    align-items: center;
    flex-direction: column;

    .containerContacts{
        width: 80vw;
        height: 80vh;
        background-color: var(--vanilla);
        border-radius: 20px;
    }

    .headerContacts {
        border-bottom: 1px solid var(--orange-wheel);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerContacts > button {
        width: 100px;
        font-size: 10px;
        border: none;
        background: var(--orange-wheel);
        color: var(--vanilla);
    }
    

    h2 {
        font-size: 18px;
        padding: 25px;
        color: var(--prussian-blue);
    }

    ul {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        overflow-x: auto;
        padding: 10px;
    }

    li {
        display: flex;
        flex-direction: column;
        background-color: var(--orange-wheel);
        border-radius: 10px;
        padding: 10px;
        gap: 10px;
        color: var(--prussian-blue);
    }

`