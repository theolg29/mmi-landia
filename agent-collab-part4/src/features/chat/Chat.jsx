import { Box, Flex } from '@radix-ui/themes'
import ChatList from './ChatList'
import { PinRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react';
// import ChatPrompt from './ChatPrompt'

function Chat() {

  const [showChat, setShowChat] = useState(false);

  return (
    <Flex direction='column' width='auto' style={{ borderLeft: '2px solid #dedede' }}>
      <Box p="4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {showChat && <h2>Chat</h2>}
        <Box style={{ display: 'flex', alignItems: 'center', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}
             onClick={() => setShowChat(!showChat)}>
          <PinRightIcon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      {showChat && <ChatList />}
    </Flex>
  );
}

export default Chat
