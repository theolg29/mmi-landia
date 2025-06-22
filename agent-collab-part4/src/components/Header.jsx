import { GearIcon, MoonIcon, RocketIcon } from '@radix-ui/react-icons'
import { Button, Flex } from '@radix-ui/themes'
import { Link } from 'raviger'
import { useState } from 'react'
import { Config } from './Config'
import { Notification } from './Notification'

export function Header() {
  const [isConfigOpen, setIsConfigOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const openConfig = () => {
    setIsConfigOpen(true)
  }

  const closeConfig = () => {
    setIsConfigOpen(false)
  }

  const handleConfigSave = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
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
          <Flex gap='6'>
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
          onClose={closeConfig}
          onSave={handleConfigSave}
        />
      )}

      {showNotification && <Notification />}
    </>
  )
}
