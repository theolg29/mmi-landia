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

  const hasCompletedFrontendMessage = messages.some(
    (msg) => isFromFrontendDeveloper(msg) && msg.completed,
  )

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
        {messages.length !== 0 && !hasCompletedFrontendMessage && (
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
                    <Box>
                      <h4>Code</h4>
                      <Separator
                        size='4'
                        style={{ marginBottom: '18px' }}
                      />
                      {msg.completed && <LiveEditor />}
                    </Box>
                    <Box style={{ marginTop: '18px' }}>
                      <h4>Prévisualisation</h4>
                      <Separator size='4' />
                      {msg.completed && <LivePreview />}
                    </Box>
                    {msg.completed && <LiveError />}
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
