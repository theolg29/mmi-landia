import { Flex, Radio, Separator, Text } from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $selectedAgentId } from '@/store/store'

function Settings() {
  const selectedAgentId = useStore($selectedAgentId)
return (
    <Flex direction="column" p="6" width="20%" style={{ borderRight: '2px solid #dedede' }}>
        
        {/* BOX - THEME */}
        <Flex direction="column" gap="2">
            <h3>Theme</h3>
            <Separator size='4' />
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="theme" value="theme1" defaultChecked />
                    Theme 1
                </Text>
            </Flex>
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="theme" value="theme2" />
                    Theme 2
                </Text>
            </Flex>
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="theme" value="theme3" />
                    Theme 3
                </Text>
            </Flex>
        </Flex>

        {/* BOX - LAYOUT */}
        <Flex direction="column" gap="2">
            <h3>Layout</h3>
            <Separator size='4' />
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="layout" value="layout1" defaultChecked />
                    Layout 1
                </Text>
            </Flex>
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="layout" value="layout2" />
                    Layout 2
                </Text>
            </Flex>
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="layout" value="layout3" />
                    Layout 3
                </Text>
            </Flex>
        </Flex>

        {/* BOX - OBJECTIFS */}
        <Flex direction="column" gap="2">
            <h3>Objectifs</h3>
            <Separator size='4'  />
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="objectifs" value="conversion" defaultChecked />
                    Conversion
                </Text>
            </Flex>
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="objectifs" value="presentation" />
                    Presentation
                </Text>
            </Flex>
            <Flex asChild gap="2">
                <Text as="label" size="2">
                    <Radio name="objectifs" value="engagement" />
                    Engagement
                </Text>
            </Flex>
        </Flex>
    </Flex>
)
}

export default Settings
