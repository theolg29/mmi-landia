import { onAgent } from '@/actions/agent'
import { $chatAgents, $messages, addMessage, updateMessages } from '@/store/store'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Button, Flex, TextArea } from '@radix-ui/themes'
import { useRef, useState } from 'react'
import { AgentMenu } from './AgentMenu'
import { AgentSelect } from './AgentSelect'
import { useStore } from '@nanostores/react'
import { isEmpty } from 'lodash'
import { extractJSXString } from '@/lib/json'

function constructCtxArray(originalArray) {
  const result = []
  if (originalArray.length > 3) result.push(originalArray.at(-3), originalArray.at(-2))
  if (originalArray.length > 1) result.push(originalArray[1])
  if (originalArray.length > 0) result.push(originalArray[0])
  return result
}

function ChatPrompt() {
  const promptRef = useRef(null)
  const containerRef = useRef(null)
  const [isPromptEmpty, setIsPromptEmpty] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const chatAgents = useStore($chatAgents)
  // const messages = useStore($messages)

  const onTextChange = () => {
    const val = promptRef.current.value || ''
    setIsPromptEmpty(val.trim().length === 0)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = (e) => {
    if (containerRef.current && containerRef.current.contains(e.relatedTarget)) {
      return
    }
    setIsFocused(false)
  }

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsFocused(false)
    }
  }

  const onSendPrompt = async () => {
    const prompt = promptRef.current.value
    console.log('onSendPrompt', prompt)
    setIsFocused(false)

    addMessage({
      role: 'user',
      content: prompt,
      id: Math.random().toString(),
    })

    const messages = $messages.get()
    const contextInputs = constructCtxArray(messages)

    // AI response
    const response = {
      role: 'assistant',
      content: '',
      id: Math.random().toString(),
      completed: false, // not complete yet
    }

    // add AI response to chat messages
    addMessage(response)

    // const stream = await onAgent({ prompt: prompt})
    //   for await (const part of stream) {
    //     const token = part.choices[0]?.delta?.content || ''

    //     response.content = response.content + token;

    //     updateMessages([...messages, response])

    //   }

    // -----------------
    // Sélection d'agents

    const steps = isEmpty(chatAgents) ? [null] : chatAgents
    for (let i = 0, len = steps.length; i < len; i++) {
      const agent = steps[i]

      console.log('agent :', agent)
      let cloned = $messages.get()

      // call agent
      const stream = await onAgent({ prompt: prompt, agent, contextInputs })

      //
      for await (const part of stream) {
        const token = part.choices[0]?.delta?.content || ''

        const last = cloned.at(-1)

        cloned[cloned.length - 1] = {
          ...last,
          content: last.content + token,
          agentId: agent?.id,
        }

        updateMessages([...cloned])
      } // end generation

      const last = cloned.at(-1)

      cloned[cloned.length - 1] = {
        ...last,
        completed: true,
      }

      // add next prompt to chat
      if (steps.length > 0 && i !== steps.length - 1) {
        cloned = [
          ...cloned,
          {
            role: 'assistant',
            content: '',
            id: Math.random().toString(),
            completed: false,
          },
        ]
      } else {
        cloned[cloned.length - 1] = {
          ...cloned[cloned.length - 1],
          content: extractJSXString(last.content),
        }
        console.log('extract JSX', cloned.at(-1))
      }

      updateMessages([...cloned])
    }

    // -------------------

    promptRef.current.value = ''
    setIsPromptEmpty(true)
  }

  return (
    <>
      <div
        className={`blur-overlay ${isFocused ? 'visible' : ''}`}
        onClick={onOverlayClick}
      />
      <Flex
        justify='center'
        mt='18px'
        width='100%'>
        <Flex
          ref={containerRef}
          align='center'
          direction='column'
          className={`prompt-container ${isFocused ? 'focused' : ''}`}>
          <TextArea
            ref={promptRef}
            id='Todo'
            placeholder='Comment puis-je aider...'
            onChange={onTextChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`prompt-area ${isFocused ? 'expanded' : ''}`}
            onKeyDown={(e) => {
              const canSend = !isPromptEmpty && e.key === 'Enter'
              const mod = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey
              if (canSend && !mod) {
                // Prevent default behavior of Enter key
                e.preventDefault()
                onSendPrompt()
              }
            }}
          />
          <Flex
            justify='between'
            width='100%'>
            <AgentMenu />
            <AgentSelect />
            <Button
              disabled={isPromptEmpty}
              onClick={onSendPrompt}>
              <PaperPlaneIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ChatPrompt
