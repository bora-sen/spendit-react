import React from 'react'
import { Header, Products } from './components';
import { MoneyContextProvider } from './context/MoneyContext';

export default function App() {

  return (
    <MoneyContextProvider>
      <main className='container md:mx-auto sm:mx-auto'>
        <Header />
        <Products />
      </main>
    </MoneyContextProvider>

  );
}
