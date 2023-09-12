import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className='text-red-300 flex items-center justify-between'>
                <div className="text-2xl bg-orange-600 py-2 px-4 rounded text-white font-semibold">
                    <Link href='/'>Movie App</Link>
                </div>
                <nav className='flex items-center gap-3'>
                    <Link href='/'>Movie</Link>
                    <Link href='/'>Series</Link>
                    <Link href='/'>Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header