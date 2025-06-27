import { GearIcon } from '@radix-ui/react-icons'
import { Button, Flex } from '@radix-ui/themes'
import { Link } from 'raviger'
import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { $showChat } from '@/store/chat'
import { Config } from './Config'
import { Notification } from './Notification'

export function Header() {
  const [isConfigOpen, setIsConfigOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const showChat = useStore($showChat)

  const openConfig = () => {
    setIsConfigOpen(true)
  }

  const handleConfigOpenChange = (open) => {
    setIsConfigOpen(open)
  }

  const handleConfigSave = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  const toggleChat = () => {
    $showChat.set(!showChat)
  }

  return (
    <>
      <Flex style={{ height: 42, width: '100vw', borderBottom: '1px solid#dedede' }}>
        <Flex
          justify='between'
          align='center'
          gap='3'
          width='100%'
          margin='0 auto'
          px='5'>
          <Flex
            gap='2'
            align='center'>
            <Link href='/'>
              <p>LandIA</p>
            </Link>
          </Flex>
          <a href='/agents'>Mes Agents</a>
          <Flex
            justify='center'
            align='center'
            direction='row'
            gap='5'>
            <Button
              variant='ghost'
              size='4'
              onClick={toggleChat}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='currentColor'
                viewBox='0 0 16 16'>
                <path d='M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2z' />
              </svg>
            </Button>
            <Button
              variant='ghost'
              size='4'
              onClick={openConfig}>
              <GearIcon
                height='22'
                width='22'
              />
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {isConfigOpen && (
        <Config
          open={isConfigOpen}
          onOpenChange={handleConfigOpenChange}
          onSave={handleConfigSave}
        />
      )}

      {showNotification && <Notification />}
    </>
  )
}
