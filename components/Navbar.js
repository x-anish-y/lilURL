import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='mix-blend-darken' src="http://img.freepik.com/premium-vector/chain-icon_1076610-26264.jpg?semt=ais_hybrid&w=740&q=80" width={39} alt="" />
                        <span className="ml-3 text-xl">lilURL</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/about" className="mr-5 hover:text-gray-900">About Us</Link>
                        <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
                    </nav>
                    <Link href="https://github.com/x-anish-y/lilURL.git">
                    <button className="inline-flex gap-1 items-center bg-gray-100 border-0 py-1.5 px-2 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">
                        <img className='' src="https://www.svgrepo.com/show/512317/github-142.svg" width={24} alt="" />
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar
