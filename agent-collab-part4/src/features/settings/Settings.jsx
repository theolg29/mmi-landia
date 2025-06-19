import { Flex, RadioGroup, Separator, Text, Heading } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $settings } from '@/store/store'

function Settings() {
  const settings = useStore($settings)
  const settingsKeys = Object.keys(settings)

  return (
    <Flex
      direction='column'
      p='6'
      style={{ borderRight: '1px solid #dedede', height: '100%' }}
      gap='4'>
      {/* MAP DU NANOSTORE */}
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
    </Flex>
  )
}

export default Settings
