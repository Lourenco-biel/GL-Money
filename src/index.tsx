import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-13 09:00:01'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1200,
          createdAt: new Date('2022-07-13 09:00:01'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
