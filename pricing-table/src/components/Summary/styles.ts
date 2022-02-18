import styled from 'styled-components';
import { darken } from 'polished'



export const Container = styled.main`

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
        hr {
            opacity: 0.3;
            margin-bottom: 1.5rem;
        }

        h4 {
            font-weight: 500;
            margin-bottom: 0.5rem;

            & + h4 {
                margin-bottom: 5rem;
            }
            
        }

        button {
            border: 1.5px solid var(--blue);
            border-radius: 0.25rem;

            color: var(--blue);
            font-weight: 500;

            width: 100%;
            padding: 0 3rem;
            height: 3rem;

            transition: border-color 0.2s;

            &:hover {
                border-color: ${darken(0.8, "#1d539e")};
            
            }
        } 

        .button-blue {
            color: #e7e7e7;
            background-color: var(--blue);
            border: none;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9)
            }

        }

    }

    


`