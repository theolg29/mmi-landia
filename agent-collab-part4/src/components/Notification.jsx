import { CheckCircledIcon } from '@radix-ui/react-icons'
import { Flex } from '@radix-ui/themes'

export function Notification() {
  return (
    <Flex
      direction='column'
      className='notification'>
      <Flex
        align='center'
        gap='2'
        className='notification-text'>
        <CheckCircledIcon />
        Paramètres sauvegardés
      </Flex>
    </Flex>
  )
}
