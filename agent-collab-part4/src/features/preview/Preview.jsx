import { Box, Flex, Skeleton, Tabs, Button } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $messages } from '@/store/store'
import { $agents } from '@/store/agents'
import { useState, useEffect } from 'react'
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'
import Exca from '@/components/Exca'

function Preview({ excalidrawRef }) {
  const messages = useStore($messages)
  const agents = useStore($agents)
  const [secondes, setSecondes] = useState(0)
  // const excalidrawRef = useRef(null)

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
      <Flex>
        <Tabs.Root
          defaultValue='canvas'
          style={{ width: '100%' }}>
          <Tabs.List>
            <Tabs.Trigger value='canvas'>Canvas</Tabs.Trigger>
            <Tabs.Trigger value='code'>Code</Tabs.Trigger>
            <Tabs.Trigger value='preview'>Preview</Tabs.Trigger>
          </Tabs.List>

          <Box pt='3'>
            <Tabs.Content value='canvas'>
              <Box>
                <Exca ref={excalidrawRef} />
              </Box>
            </Tabs.Content>

            <Tabs.Content value='code'>
              {messages.map((msg) => (
                <Box key={msg.id}>
                  {isFromFrontendDeveloper(msg) && msg.completed && (
                    <LiveProvider
                      code={msg.content}
                      noInline>
                      <LiveEditor />
                      <LiveError />
                    </LiveProvider>
                  )}
                </Box>
              ))}
            </Tabs.Content>

            <Tabs.Content value='preview'>
              {messages.map((msg) => (
                <Box key={msg.id}>
                  {isFromFrontendDeveloper(msg) && msg.completed && (
                    <LiveProvider
                      code={msg.content}
                      noInline>
                      <LivePreview />
                    </LiveProvider>
                  )}
                </Box>
              ))}
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
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
            <Skeleton height='400px' />
          </>
        )}
      </Box>
    </Flex>
  )
}

export default Preview
