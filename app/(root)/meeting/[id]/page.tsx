"use client"

import { useUser } from '@clerk/nextjs'
import React, {useState} from 'react'
import {StreamCall, StreamTheme} from "@stream-io/video-react-sdk"
import MeetingSetups from '@/components/ui/MeetingSetups'
import MeetingRoom from '@/components/ui/MeetingRoom'
import { useGetCallById } from '@/hooks/useGetCallById'
import Loader from '@/components/ui/Loader'

const Meeting = ({params: {id}}:{params: {id: string}}) => {
   const {user , isLoaded} = useUser()
   const [isSetupComplete, setIsSetupComplete] = useState(false)
   const {call,isCallLoading} = useGetCallById(id)

   if (!isLoaded || isCallLoading) return <Loader />
    return (
      <main className='h-screen w-full text-white'>
        <StreamCall call={call}>
          <StreamTheme>
            {!isSetupComplete? 
            (<MeetingSetups setIsSetupComplete={setIsSetupComplete} />) : (<MeetingRoom />)}
          </StreamTheme>
        </StreamCall>
      </main>
      )
}

export default Meeting