import { Markdown } from '@/components/Markdown'
import { $messages } from '@/store/store'
import { useStore } from '@nanostores/react'
import { Box, Flex } from '@radix-ui/themes'

function ChatList() {
  const messages = useStore($messages)

  return (
    <Flex
      direction="column"
      gap="3"
      style={{
        overflowY: 'auto',
        padding: '16px',
      }}
    >
      {messages.map((msg) => (
        <Flex
          key={`message-${msg.id}`}
        >
          {msg.role === 'assistant' ? (
            <Flex>
              <Box style={{ marginRight: '8px', marginTop: '8px' }}>🤖</Box>
              <Markdown content={msg.content || ''} />
            </Flex>
          ) : (
            <Flex>
              <Box style={{ marginRight: '8px', marginTop: '8px' }}>😀</Box>
              <Markdown content={msg.content || ''} />
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  )
}

export default ChatList
