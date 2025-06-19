import { Box, Flex } from '@radix-ui/themes'
import ChatList from './ChatList'
import { PinRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react';
// import ChatPrompt from './ChatPrompt'

function Chat({ showChat, setShowChat }) {

  return (
    <Flex direction='column' style={{ borderLeft: '1px solid #dedede', height: '100%' }}>
      <Flex p="4" justify='between' align='center' width='100%'>
        {showChat && <h2 style={{ margin: '0' }}>Chat</h2>}
        <Flex style={{ padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px', cursor: 'pointer' }}
             onClick={() => setShowChat(!showChat)}>
          <PinRightIcon />
        </Flex>
      </Flex>
      {showChat && <ChatList />}
    </Flex>
  );
}

export default Chat
