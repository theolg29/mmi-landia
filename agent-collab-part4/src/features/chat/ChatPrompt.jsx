import { onAgent } from '@/actions/agent'
import {
  $chatAgents,
  $messages,
  addMessage,
  updateMessages,
  $theme,
  $layout,
  $objectif,
} from '@/store/store'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Button, Flex, TextArea } from '@radix-ui/themes'
import { useRef, useState } from 'react'
import { AgentMenu } from './AgentMenu'
import { AgentSelect } from './AgentSelect'
import { useStore } from '@nanostores/react'
import { isEmpty } from 'lodash'
import { extractJSXString } from '@/lib/json'
import { lpFewShots } from '@/utils/prompt'
import { exportCanvasToBase64 } from '@/utils/excalidraw'

function constructCtxArray(originalArray) {
  const result = []
  if (originalArray.length > 3) result.push(originalArray.at(-3), originalArray.at(-2))
  if (originalArray.length > 1) result.push(originalArray[1])
  if (originalArray.length > 0) result.push(originalArray[0])
  return result
}

// Questions fréquentes
const frequentQuestions = [
  'Landing Page pour un produit technologique',
  'Landing Page pour une application mobile',
  'Landing Page pour un événement sportif',
]

function ChatPrompt({ excalidrawRef }) {
  const promptRef = useRef(null)
  const containerRef = useRef(null)
  const fileInputRef = useRef(null)
  const [isPromptEmpty, setIsPromptEmpty] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const chatAgents = useStore($chatAgents)

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

  const onQuestionClick = (question) => {
    if (promptRef.current) {
      promptRef.current.value = question
      setIsPromptEmpty(false)
      promptRef.current.focus()
    }
  }

  const onFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  const onSendPrompt = async () => {
    console.log('EXCA REF', excalidrawRef)

    let prompt = promptRef.current.value

    // Surcharge prompt settings

    const theme = $theme.get()
    const layout = $layout.get()
    const objectif = $objectif.get()

    prompt =
      prompt +
      `\n \n Je souhaite que ma landing page à un thème ${theme}, mon layout sera de ${layout} et l'objectif de cette page sera de ${objectif}`

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

    // Prepare send image du canvas
    const images = []
    const imageURL = await exportCanvasToBase64({ excalidrawRef })
    console.log('IMAGE URL', imageURL)
    if (imageURL?.src) {
      images.push({
        type: 'image_url',
        image_url: {
          url: imageURL.src,
        },
      })
    }

    // -----------------
    // Sélection d'agents

    const steps = isEmpty(chatAgents) ? [null] : chatAgents
    for (let i = 0, len = steps.length; i < len; i++) {
      const agent = steps[i]

      console.log('agent :', agent)
      let cloned = $messages.get()

      if (agent.title === 'Développeur Frontend') {
        prompt = prompt + `\n ${lpFewShots}`
      }

      // call agent
      const stream = await onAgent({ prompt: prompt, agent, contextInputs, images })

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
        width='100%'
        direction='column'
        align='center'>
        {/* Questions fréquentes */}
        <Flex
          direction='column'
          gap='2'
          mb='4'
          width='100%'>
          <Flex
            wrap='wrap'
            gap='2'>
            {frequentQuestions.map((question, index) => (
              <Button
                key={index}
                variant='soft'
                size='1'
                onClick={() => onQuestionClick(question)}
                style={{
                  cursor: 'pointer',
                }}>
                {question}
              </Button>
            ))}
          </Flex>
        </Flex>

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
            <Flex
              align='center'
              gap='2'>
              <AgentMenu />
              <input
                ref={fileInputRef}
                type='file'
                style={{ display: 'none' }}
              />
              <Button onClick={onFileButtonClick}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-paperclip'
                  viewBox='0 0 16 16'>
                  <path d='M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z' />
                </svg>
              </Button>
            </Flex>
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
