import styled  from 'styled-components'


export const Container = styled.header`

    
    width: 100%;
    height: 50vh;

    margin: 0 auto;

    display: flex;
    justify-content: center;

    background-color: var(--blue);
    font-size: 1.5rem;

    & p {
        margin-top: 1rem;
    }

    div {
        color: var(--shape);
        margin-top: 7rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

`