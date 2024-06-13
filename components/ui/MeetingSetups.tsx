"use client"
import React, { useEffect, useState } from 'react'
import {VideoPreview, useCall, DeviceSettings} from "@stream-io/video-react-sdk"
import { Button } from './button'

const MeetingSetups = ({setIsSetupComplete}: {setIsSetupComplete: (value: boolean) => void}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

  const call = useCall()

  if(!call) {
    throw new Error("useCall must be used within StreamCall component")
  }

  useEffect(() => {
    if(isMicCamToggledOn){
      call?.camera.disable()
      call?.microphone.disable()
    }else{
      call?.camera.enable()
      call?.microphone.enable()
    }

  },[isMicCamToggledOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-5 text-white my-3' >
      <h1 className=' text-3xl font-bold'>Setup</h1>
      <div className='rounded-md '>
        <VideoPreview  className=' w-[50vw] rounded-lg'/>
      </div>
      <div className=' flex h-16 items-center justify-center gap-3'>
        <label className=" flex items-center justify-center gap-2 font-medium">
          <input 
            type='checkbox'
            checked={isMicCamToggledOn} 
            onChange={(e) => {
            setIsMicCamToggledOn(e.target.checked)
            }}/>
            Join with mic and camera off
        </label>
        <DeviceSettings />
      </div> 
      <Button className='rounded-md bg-green-500 px-4 py-2.5' 
      onClick={() => {
            call.join() 
            setIsSetupComplete(true)
          }
        }
        >join meetinng</Button>
    </div>
  )
}

export default MeetingSetups