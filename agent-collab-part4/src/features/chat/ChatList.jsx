import { Markdown } from '@/components/Markdown'
import { $messages } from '@/store/store'
import { useStore } from '@nanostores/react'
import { Box, Flex, Separator } from '@radix-ui/themes'
import { useEffect, useRef } from 'react'

function ChatList() {
  const messages = useStore($messages)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <Flex
      direction='column'
      gap='3'
      style={{
        overflowY: 'auto',
        padding: '16px',
      }}>
      {messages.map((msg) => (
        <Flex key={`message-${msg.id}`}>
          {msg.role === 'assistant' ? (
            <Flex
              direction='column'
              style={{
                backgroundColor: '#f8f9fa',
                padding: '12px',
                borderRadius: '8px',
                width: '100%',
              }}>
              <Flex
                style={{
                  paddingBottom: '4px',
                  marginBottom: '4px',
                  fontWeight: 'bold',
                }}>
                🤖 - Assitant
              </Flex>
              <Separator size='4' />
              <Markdown content={msg.content || ''} />
            </Flex>
          ) : (
            <Flex
              direction='column'
              style={{
                backgroundColor: '#e3f2fd',
                padding: '12px',
                borderRadius: '8px',
                width: '100%',
              }}>
              <Flex
                style={{
                  paddingBottom: '4px',
                  marginBottom: '4px',
                  fontWeight: 'bold',
                }}>
                😀 - Vous
              </Flex>
              <Separator size='4' />
              <Markdown content={msg.content || ''} />
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  )
}

export default ChatList
