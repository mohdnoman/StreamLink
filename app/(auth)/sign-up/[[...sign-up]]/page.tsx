import React from 'react'
import {SignUp} from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <main className=' flex w-full items-center justify-center'>
        <SignUp />
    </main>
  )
}

export default SignUpPage