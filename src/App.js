import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <div className={"row"}>
      <div className={"col-6"}>
        <GlobalProvider>
          <Header country={"US"} />
          <div className="container">
            <Balance mSign="$" />
            <IncomeExpenses />
            <TransactionList sign="$" />
            <AddTransaction />
          </div>
        </GlobalProvider>
      </div>
      <div className={"col-6"}>
        <GlobalProvider>
        <Header country={"India"} />
        <div className="container">
          <Balance mSign="Rs." />
          <IncomeExpenses />
          <TransactionList sign="Rs." />
          <AddTransaction />
        </div>
      </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
