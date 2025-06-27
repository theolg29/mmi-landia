import { Flex } from '@radix-ui/themes'
import ChatPrompt from '../chat/ChatPrompt'
import Preview from './Preview'

function Result({ excalidrawRef }) {
  return (
    <Flex
      direction='column'
      justify='between'
      p='4'
      style={{ height: '100%' }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden' }}>
        <Preview excalidrawRef={excalidrawRef} />
      </div>
      <ChatPrompt excalidrawRef={excalidrawRef} />
    </Flex>
  )
}

export default Result
