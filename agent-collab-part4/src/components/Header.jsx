import { MoonIcon, RocketIcon } from '@radix-ui/react-icons'
import { Button, Flex } from '@radix-ui/themes'
import { Link } from 'raviger'

export function Header() {
  return (
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
        <a href="/agents">Mes Agents</a>
        <Flex
          justify='center'
          align='center'
          direction='row'
          gap='5'>
          <Button
            variant='ghost'
            size='4'>
            <MoonIcon
              height='22'
              width='22'
            />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
