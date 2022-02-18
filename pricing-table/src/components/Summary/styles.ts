import styled from 'styled-components'



export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    max-width: 1200px;

    margin: -8rem auto 0;


    div {
        background-color: var(--shape);
        padding: 1.5rem;
        border-radius: 0.5rem;

        

        

        header {
            font-size: 1.2rem;
            font-weight: 500;

            margin-bottom: 1rem;
        }

        span {
           font-size: 1.5rem;
           font-weight: 600;

           
        }

        p {
            color: var(--gray);
            margin: 1.2rem 0;
        }

        h4 {
            font-weight: 500;
        }

    }


`