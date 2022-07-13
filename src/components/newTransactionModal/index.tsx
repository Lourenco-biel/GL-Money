import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import * as C from './style'
import { useTransactions } from '../../Hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
        onRequestClose();

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <i className="fa-solid fa-x"></i>
            </button>

            <C.Container onSubmit={handleCreateNewTransaction} >

                <h2>Cadastrar Transação</h2>

                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type='number'
                    placeholder='Preço'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <C.TransactionTypeContainer>

                    <C.RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <i className="fa-solid fa-circle-arrow-down"></i>
                        <span>Entrada</span>
                    </C.RadioBox>


                    <C.RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <i className="fa-solid fa-circle-arrow-up"></i>
                        <span>Saida</span>
                    </C.RadioBox>

                </C.TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </C.Container>
        </Modal>
    );
}