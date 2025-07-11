import { Cross2Icon } from '@radix-ui/react-icons'
import {
  Button,
  Flex,
  Text,
  RadioGroup,
  Heading,
  TextArea,
  Dialog,
} from '@radix-ui/themes'
import { useState, useEffect } from 'react'

export function Config({ open, onOpenChange, onSave }) {
  const [baseUrl, setBaseUrl] = useState('')
  const [model, setModel] = useState('')
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const savedBaseUrl =
      localStorage.getItem('ia_base_url') || import.meta.env.VITE_IA_BASE_URL || ''
    const savedModel =
      localStorage.getItem('ia_model') || import.meta.env.VITE_IA_MODEL || ''
    const savedTheme = localStorage.getItem('app_theme') || 'system'

    setBaseUrl(savedBaseUrl)
    setModel(savedModel)
    setTheme(savedTheme)
  }, [])

  const handleSave = () => {
    localStorage.setItem('ia_base_url', baseUrl)
    localStorage.setItem('ia_model', model)
    localStorage.setItem('app_theme', theme)

    onOpenChange(false)

    if (onSave) {
      onSave()
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}>
      <Dialog.Content style={{ maxWidth: '500px' }}>
        <Dialog.Title>
          <Flex
            justify='between'
            align='center'>
            <Heading size='6'>Paramètres</Heading>
            <Dialog.Close>
              <Button
                variant='ghost'
                size='2'>
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Title>

        <Flex
          direction='column'
          gap='4'
          pt='4'>
          <Flex
            direction='column'
            gap='3'>
            <Heading size='4'>Thème</Heading>
            <RadioGroup.Root
              value={theme}
              onValueChange={setTheme}>
              <Text
                as='label'
                size='2'>
                <Flex
                  gap='2'
                  align='center'>
                  <RadioGroup.Item value='system' />
                  Apparence du système
                </Flex>
              </Text>
              <Text
                as='label'
                size='2'>
                <Flex
                  gap='2'
                  align='center'>
                  <RadioGroup.Item value='light' />
                  Clair
                </Flex>
              </Text>
              <Text
                as='label'
                size='2'>
                <Flex
                  gap='2'
                  align='center'>
                  <RadioGroup.Item value='dark' />
                  Sombre
                </Flex>
              </Text>
            </RadioGroup.Root>
          </Flex>

          <Flex
            direction='column'
            gap='3'>
            <Heading size='4'>Connexion</Heading>
            <Text
              as='label'
              size='2'>
              URL de connexion
              <TextArea
                placeholder='http://127.0.0.1:1234/v1'
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
              />
            </Text>
            <Text
              as='label'
              size='2'>
              Modèle utilisé
              <TextArea
                placeholder='qwen/qwen3-4b'
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Text>
            <Button onClick={handleSave}>Sauvegarder</Button>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
