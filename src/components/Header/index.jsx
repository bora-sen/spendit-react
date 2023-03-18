import React, { useContext } from 'react'
import { MoneyContext } from '../../context/MoneyContext'

function Header() {
  const {money} = useContext(MoneyContext);
  return (
    <header className='sticky top-0 shadow-lg flex flex-col items-center justify-center bg-slate-100 h-auto py-4 text-gray-900 md:flex-row sm:flex-row sm:justify-between'>
      <h1 className='text-5xl font-bungee sm:ml-4'>spendIt</h1>
      <span className='text-2xl font-bold mr-4 mt-4 sm:mt-0'>Current Money: ${money}</span>
    </header>
  )
}

export default Header