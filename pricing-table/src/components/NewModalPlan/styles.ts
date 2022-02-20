import { darken } from 'polished'
import styled from 'styled-components'


export const Container = styled.form`

h1 {
    margin-bottom: 1rem;
}

input {


    width: 100%;
    height: 3rem;

    & + input {
        margin-top: 1rem;
    }

    &::placeholder {
        padding: 0.5rem;
    }

}


`

export const Buttons = styled.div`


margin-top: 3rem;

display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;


button {
        
        padding: 0 2rem;
        height: 4rem;

        border: none;
        border-radius: 0.25rem;

        border: 1.5px solid var(--blue);

        color: var(--blue);

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.9, "#1d539e")};
        }

}

.btn-signed {
    background-color: var(--blue);
    color: var(--shape);

    border: none;

    &:hover {
        filter: brightness(0.9);
    }
}

`