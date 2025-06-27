import { Resizable } from '@/components/Resizable'
import Agent from '@/features/agent/Agent'
import Chat from '../features/chat/Chat'
import Settings from '@/features/settings/Settings'
import Preview from '@/features/preview/Preview'
import { Flex } from '@radix-ui/themes'
import Result from '@/features/preview/Result'
import { useStore } from '@nanostores/react'
import { $showChat } from '@/store/chat'
import { useRef } from 'react'

function Landia() {
  const showChat = useStore($showChat)
  const excalidrawRef = useRef(null)

  return (
    <Flex
      width='100vw'
      height={'96vh'}
      direction='row'
      style={{ overflow: 'hidden' }}>
      <div style={{ flex: '0 0 20%', height: '100%' }}>
        <Settings />
      </div>
      <div
        style={{
          flex: showChat ? '0 0 60%' : '0 0 80%',
          height: '100%',
          position: 'relative',
          transition: 'flex-basis 300ms',
        }}>
        <Result excalidrawRef={excalidrawRef} />
      </div>
      <div
        style={{
          flex: showChat ? '0 0 20%' : '0 0 0%',
          height: '100%',
          overflow: 'hidden',
        }}>
        <Chat excalidrawRef={excalidrawRef} />
      </div>
    </Flex>
  )
}

export default Landia
