import { Flex, Separator, Skeleton } from '@radix-ui/themes'
import ChatPrompt from '../chat/ChatPrompt'
import Preview from './Preview'

function Result() {


    return (
        <Flex direction="column" justify='between' p="6" style={{ height: '100%' }}>
            <h2>Résultat</h2>
            <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden' }}>
                <Preview />
            </div>
            <ChatPrompt />
        </Flex>
    )
}

export default Result