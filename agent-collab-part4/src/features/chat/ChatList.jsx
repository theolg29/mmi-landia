import { Markdown } from '@/components/Markdown'
import { $messages, $agents } from '@/store/store'
import { useStore } from '@nanostores/react'
import { Flex, Separator } from '@radix-ui/themes'
import { useEffect, useRef } from 'react'

function ChatList() {
  const messages = useStore($messages)
  const agents = useStore($agents)
  const containerRef = useRef(null)

  const scrollToBottom = () => {
    if (containerRef.current) {
      const container = containerRef.current
      container.scrollTop = container.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAgentTitle = (agentId) => {
    if (!agentId) return 'Assistant'
    const agent = agents.find((a) => a.id === agentId)
    return agent ? agent.title : 'Assistant'
  }

  return (
    <Flex
      ref={containerRef}
      direction='column'
      gap='3'
      style={{
        overflowY: 'auto',
        padding: '16px',
        scrollBehavior: 'smooth',
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
                🤖 - {getAgentTitle(msg.agentId)}
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
