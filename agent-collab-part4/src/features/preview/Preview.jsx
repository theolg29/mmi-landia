import { Flex, Separator, Skeleton } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $messages } from '@/store/store'
import { useState } from 'react'
import ChatPrompt from '../chat/ChatPrompt'

function Settings() {
    const messages = useStore($messages)

    return (
        <Flex direction="column" p="6" width='60%'>
            <h2>Résultat</h2>
            {messages.length !== 0 && (
                <>
                    <Flex width='100%'>
                        <div class="loader"></div>
                        <p>En réflexion...</p>
                    </Flex>
                    
                    <Skeleton height="40px" style={{ marginBottom: '8px' }} />
                    <Skeleton height="500px" />
                </>
            )}
            <ChatPrompt />
        </Flex>
    )
}

export default Settings