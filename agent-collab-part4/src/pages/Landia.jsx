import { Resizable } from '@/components/Resizable'
import Agent from '@/features/agent/Agent'
import Chat from '../features/chat/Chat'
import Settings from '@/features/settings/Settings'
import Preview from '@/features/preview/Preview'
import { Flex } from '@radix-ui/themes'
import Result from '@/features/preview/Result'
import { useState } from 'react'
import { PinLeftIcon } from '@radix-ui/react-icons'

function Landia() {
  const [showChat, setShowChat] = useState(true);

  return (
    <Flex width='100vw' height={'96vh'} direction='row' style={{ overflow: 'hidden' }}>
      <div style={{ flex: '0 0 20%', height: '100%' }}>
        <Settings />
      </div>
      <div style={{ flex: showChat ? '0 0 60%' : '0 0 80%', height: '100%', position: 'relative', transition: 'flex-basis 300ms' }}>
        <Result />
        {!showChat && (
          <Flex
            style={{
              position: 'absolute',
              top: 20,
              right: 0,
              padding: '12px',
              background: '#f0f0f0',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setShowChat(true)}
          >
            <PinLeftIcon />
          </Flex>
        )}
      </div>
      <div
        style={{
          flex: showChat ? '0 0 20%' : '0 0 0%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <Chat showChat={showChat} setShowChat={setShowChat} />
      </div>
    </Flex>
  )
}

export default Landia
