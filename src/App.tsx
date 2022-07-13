import { Header } from './components/Header'
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { NewTransactionModal } from './components/newTransactionModal';
import { TransactionsProvider } from './Hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpne, setIsNewTransactionModalOpne] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpne(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpne(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNeewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpne}
        onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}

