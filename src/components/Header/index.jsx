import React from 'react'
import { MoneyContext } from '../../context/MoneyContext'

function Header() {
  return (
    <MoneyContext.Consumer>
      {val => (
            <header className='flex flex-col items-center justify-center bg-slate-100 h-auto py-4 text-gray-900 md:flex-row sm:flex-row sm:justify-around md:justify-around'>
            {/* Brand Text */}
            <h1 className='text-5xl font-bungee'>spendIt</h1>
            {/* Right Section */}
            <span className='text-2xl font-bold'>Current Money: {val.money}</span>
          </header>
      )}
    </MoneyContext.Consumer>
  )
}

export default Header