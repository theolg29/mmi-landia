import { Flex, RadioGroup, Separator, Text, Heading, Box } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $settings } from '@/store/store'
import { LoopIcon, PlusIcon } from '@radix-ui/react-icons'

function Settings() {
  const settings = useStore($settings)
  const settingsKeys = Object.keys(settings)

  return (
    <Flex
      direction='column'
      justify='between'
      p='6'
      style={{ borderRight: '1px solid #dedede', height: '100%' }}
      gap='4'>
      {/* MAP DU NANOSTORE */}
      <Box>
        {settingsKeys.map((category) => (
          <Flex
            direction='column'
            gap='2'>
            <h3 style={{ marginBottom: 0 }}>{settings[category].title}</h3>
            <Separator size='4' />
            <RadioGroup.Root
              defaultValue='1'
              name='example'>
              {settings[category].choices.map((choice) => (
                <Flex
                  asChild
                  gap='2'>
                  <Text
                    as='label'
                    size='2'>
                    <RadioGroup.Item
                      name='theme'
                      value={choice.value}
                      defaultChecked
                    />
                    {choice.title}
                  </Text>
                </Flex>
              ))}
            </RadioGroup.Root>
          </Flex>
        ))}
        <Flex
          align='center'
          gap='4'
          style={{
            marginTop: '18px',
            cursor: 'pointer',
            width: 'fit-content',
            backgroundColor: '#535bf2',
            padding: '6px 12px 6px 12px',
            borderRadius: '100px',
            color: '#fff',
          }}>
          <LoopIcon />
          <p style={{ margin: '0' }}>Régéner ma page</p>
        </Flex>
      </Box>
      <Flex
        align='center'
        gap='4'
        style={{
          cursor: 'pointer',
          width: 'fit-content',
          backgroundColor: '#535bf2',
          padding: '12px',
          borderRadius: '12px',
          color: '#fff',
        }}>
        <PlusIcon />
        <p style={{ margin: '0' }}>Nouveau chat</p>
      </Flex>
    </Flex>
  )
}

export default Settings
