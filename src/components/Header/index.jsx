import React from 'react'
import { MoneyContext } from '../../context/MoneyContext'

function Header() {
  return (
    <MoneyContext.Consumer>
      {val => (
            <header className='flex items-center justify-between bg-slate-100 h-auto py-4 text-gray-900'>
            {/* Brand Text */}
            <h1 className='text-5xl ml-8 font-bungee'>spendIt</h1>
            {/* Right Section */}
            <span className='text-2xl font-bold mr-8'>Current Money: {val.money}</span>
          </header>
      )}
    </MoneyContext.Consumer>
  )
}

export default Header