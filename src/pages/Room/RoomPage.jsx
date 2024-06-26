import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId}=useParams()

    const myMeeting=async(ele)=>{
        const appID = 954385215;
        const serverSecret = "ca1fbb6c0b8c621db33e7ea27a7ee22f";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomId, Date.now().toString(),"user01")

        const zc=ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:ele,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:5173/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
        })
    }
  return (
    <div>
        <div ref={myMeeting}></div>
    </div>
  )
}

export default RoomPage