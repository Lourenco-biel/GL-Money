import * as C from './style'
import { useTransactions } from '../../Hooks/useTransactions'

export function Summary() {
    const { transactions } = useTransactions()

    const sumamary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <C.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <i className="fa-solid fa-circle-arrow-up"></i>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumamary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <i className="fa-solid fa-circle-arrow-down"></i>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumamary.withdraws)}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <i className="fa-solid fa-circle-dollar">$</i>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumamary.total)}</strong>
            </div>
        </C.Container>
    )
}