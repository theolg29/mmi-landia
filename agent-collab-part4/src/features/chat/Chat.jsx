import { Box, Flex } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $showChat } from '@/store/chat'
import ChatList from './ChatList'
// import ChatPrompt from './ChatPrompt'

function Chat() {
  const showChat = useStore($showChat)

  return (
    <Flex
      direction='column'
      style={{ borderLeft: '1px solid #dedede', height: '100%' }}>
      <Flex
        p='4'
        justify='between'
        align='center'
        width='100%'></Flex>
      {showChat && <ChatList />}
    </Flex>
  )
}

export default Chat
