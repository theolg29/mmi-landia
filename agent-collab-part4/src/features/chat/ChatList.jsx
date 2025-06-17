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
        height: 'calc(100vh - 200px)',
        overflowY: 'auto',
        padding: '16px',
        borderRadius: '8px',
      }}
    >
      {messages.map((msg) => (
        <Flex
          key={`message-${msg.id}`}
          direction="row"
          align="start"
          style={{
            marginBottom: '12px',
          }}
        >
          {msg.role === 'assistant' ? (
            <Flex
              direction="row"
              align="center"
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                maxWidth: '70%',
              }}
            >
              <Box style={{ marginRight: '8px' }}>🤖</Box>
              <Markdown content={msg.content || ''} />
            </Flex>
          ) : (
            <Flex
              direction="row"
              align="top"
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                maxWidth: '70%',
                marginLeft: 'auto',
              }}
            >
              <Box style={{ marginRight: '8px' }}>😀</Box>
              <Markdown content={msg.content || ''} />
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  )
}

export default ChatList
