"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import {SignedIn, UserButton} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className=' flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
      <Image src="/icons/logo.svg" alt='streamlink' width={32} height={32} className='max-sm:size-10'/>
      <p className='text-[26px] text-extrabold text-white max-sm:hidden'>StreamLink</p>
      </Link>

      <div className='flex-between gap-5'>
        {/* CLERK - USER MANAGMENT  */}
          <SignedIn>
              <UserButton />
          </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar