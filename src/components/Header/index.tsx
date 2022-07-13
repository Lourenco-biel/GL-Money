import * as C from './style';

interface HeaderProps{
    onOpenNeewTransactionModal: () => void;
}

export function Header({onOpenNeewTransactionModal}:  HeaderProps){
    
    return(
        <C.Container>
            <C.Content>
            <p>GLMoney</p>
            <button type="button" onClick={onOpenNeewTransactionModal}>
                Nova transação
            </button>
            </C.Content>
        </C.Container>
    )
}