import Modal from 'react-modal'
import { Container } from './styles';

interface NewModalPlanProps {
    isOpen: boolean;
    onRequestClose: () => void;
} 

export function NewModalPlan({isOpen, onRequestClose}: NewModalPlanProps) {

    

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}

        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        
        ariaHideApp={false}
        >
            <Container>
            <h1>Plano</h1>
            <input type="text" placeholder="Seu nome"/>
            <input type="email" placeholder="Seu Email"/>
            <input type="search" />

            <button>
                Cancelar
            </button>
            <button type="submit">
                Assinar
            </button>
            </Container>
            
        </Modal>
    );
}