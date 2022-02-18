import { Container } from "./styles";
import vistoImg from '../../assets/visto.svg'


export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    Free
                </header>
                <span>
                    R$ 0,00 /mês
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <hr />
                <h4>
                    <img src={vistoImg} alt="Visto" /> Lorem ipsum dolor sit amet
                </h4>
                <h4>
                    <img src={vistoImg} alt="Visto" /> Lorem ipsum dolor sit amet
                </h4>
                <button type="button">
                    Assinar
                </button>
            </div>
            <div>
                <header>
                    Free
                </header>
                <span>
                    R$ 0,00 /mês
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <hr />
                <h4>
                    <img src={vistoImg} alt="Visto" /> Lorem ipsum dolor sit amet
                </h4>
                <h4>
                    <img src={vistoImg} alt="Visto" /> Lorem ipsum dolor sit amet
                </h4>
                <button type="button" className="basic-plan">
                    Assinar
                </button>
            </div>
            <div>
                <header>
                    Free
                </header>
                <span>
                    R$ 0,00 /mês
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <hr />
                <h4>
                    <img src={vistoImg} alt="Visto" /> Lorem ipsum dolor sit amet
                </h4>
                <h4>
                    <img src={vistoImg} alt="Visto" /> Lorem ipsum dolor sit amet
                </h4>
                <button type="button">
                    Assinar
                </button>
            </div>
        </Container>
    );
}