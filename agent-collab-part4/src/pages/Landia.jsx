import { Resizable } from '@/components/Resizable'
import Agent from '@/features/agent/Agent'
import Chat from '../features/chat/Chat'
import Settings from '@/features/settings/Settings'
import Preview from '@/features/preview/Preview'
import { Flex } from '@radix-ui/themes'

function Landia() {
  return (
    <Flex width='100%' height={'94vh'} direction='row'>
      <Settings />
      <Preview />
      <Chat />
      {/* <Agent /> */}
    </Flex>
  )
}

export default Landia