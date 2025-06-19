import { Box, Flex, Separator, Skeleton } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $messages } from '@/store/store'
import { $agents } from '@/store/agents'
import { useState, useEffect } from 'react'
import ChatPrompt from '../chat/ChatPrompt'
import { Markdown } from '@/components/Markdown'
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'

function Preview() {
  const messages = useStore($messages)
  const agents = useStore($agents)
  const [secondes, setSecondes] = useState(0)

  const isFromFrontendDeveloper = (msg) => {
    const agent = agents.find((agent) => agent.id === msg.agentId)
    return agent && agent.title === 'Développeur Frontend'
  }

  // Temps de réflexion
  useEffect(() => {
    let interval
    if (messages.length !== 0) {
      interval = setInterval(() => {
        setSecondes((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  })

  return (
    <Flex direction='column'>
      <Box>
        {messages.length !== 0 && (
          <>
            <Flex
              width='100%'
              align='center'
              gap='4'>
              <div class='loader'></div>
              <p>En réflexion {secondes}s...</p>
            </Flex>

            <Skeleton
              height='40px'
              style={{ marginBottom: '8px' }}
            />
            <Skeleton height='500px' />
          </>
        )}
      </Box>

      <Flex
        direction='column'
        gap='2'>
        {messages.map((msg) => (
          <Flex key={msg.id}>
            {isFromFrontendDeveloper(msg) && (
              <Flex direction='column'>
                {/* <Markdown content={msg.content} /> */}
                <LiveProvider
                  code={msg.content}
                  noInline>
                  <Flex direction='column'>
                    {msg.completed && <LiveEditor />}
                    <Box style={{ padding: '8px', backgroundColor: 'grey' }}>
                      {msg.completed && <LivePreview />}
                    </Box>
                    <LiveError />
                  </Flex>
                </LiveProvider>
              </Flex>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default Preview
