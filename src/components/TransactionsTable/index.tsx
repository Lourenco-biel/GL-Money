import { useTransactions } from '../../Hooks/useTransactions';
import * as C from './style'



export function TransactionsTable() {
    const { transactions } = useTransactions();


    return (
        <C.Container>

            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td> {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.amount))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </C.Container>
    )
}