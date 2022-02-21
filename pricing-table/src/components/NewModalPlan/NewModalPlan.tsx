import { useState } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import { Buttons, Container } from './styles';

interface NewModalPlanProps {
    isOpen: boolean;
    onRequestClose: () => void;
} 

export function NewModalPlan({isOpen, onRequestClose}: NewModalPlanProps) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [plan, setPlan] = useState("");


    function createNewPlan() {

        const data = {
            name,
            email,
            plan
        }

        api.post('plans', data)
    }

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
            <input 
            type="text" 
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
            />
            <input 
            type="email" 
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="search" 
            placeholder="Plano"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            />

                <Buttons>
                    <button type="button" onClick={onRequestClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn-signed" onSubmit={createNewPlan}>
                        Assinar
                    </button>
                </Buttons>
            </Container>
            
        </Modal>
    );
}