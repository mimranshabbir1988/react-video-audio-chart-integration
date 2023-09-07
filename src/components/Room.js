import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { AppID, ServerSecret } from './Helpers';

const Room = () => {

    const{roomId} = useParams()
    console.log("room id __________ ",roomId)

    const myMeeting = async(element) =>{
        const appID = AppID;
        const serverSecret = ServerSecret;

        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "Rahil Ahmad");

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element, 
        sharedLinks: [
            {
              name: 'PNY Meeting Link',
              url: `http://localhost:3000`
            },
          ],    
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, 
        },
        showScreenSharingButton: false,
      });
  };


  return (

    <>
        <div ref={myMeeting} /> 
    </>
    // <div
    //   className="myCallContainer"
    //   ref={myMeeting}
    //   style={{ width: '100vw', height: '100vh' }}
    // ></div>
  )
}

export default Room
