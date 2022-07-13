import * as C from './style'
import { Summary } from "../Summary";
import {TransactionsTable} from '../TransactionsTable'


export function Dashboard (){
    return(
        <C.Container>
        <Summary/>
        <TransactionsTable/>
        </C.Container>
    )
}