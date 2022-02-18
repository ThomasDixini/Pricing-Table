import { Container } from "./styles";
import vistoImg from '../../assets/visto.svg'

interface SummaryProps {
    onOpenModal: () => void;
}


export function Summary( {onOpenModal} : SummaryProps) {
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
                <button type="button" onClick={onOpenModal}>
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
                <button type="button" className="button-blue" onClick={onOpenModal}>
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
                <button type="button" onClick={onOpenModal}>
                    Assinar
                </button>
            </div>
        </Container>
    );
}