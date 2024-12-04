import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-orange-500 flex justify-between px-3  items-center text-white'>
            <div className='logo font-bold text-2xl'>
                <Link href="/">MicroLinks</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href="/"><li className='hover:font-bold'>Home</li></Link>
                <Link href="/about"><li className='hover:font-bold'> About</li></Link>
                <Link href="/shorten"><li className='hover:font-bold'>Shorten URL</li></Link>
                <Link href="/contact"><li className='hover:font-bold'>Contact Us</li></Link>

                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-orange-200 hover:font-bold shadow-lg p-3 py-1 font-bold text-black rounded-lg'>TRY NOW!</button></Link>
                    <Link href="/github"><button className='bg-orange-200 hover:font-bold shadow-lg p-3 py-1 font-bold text-black rounded-lg'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
