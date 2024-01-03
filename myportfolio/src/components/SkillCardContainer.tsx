import { Button, Flex, Text } from "@mantine/core";

type Props = {
    header: string,
    data: string[]
}
export default function SkillsCardContainer(props: Props) {
    const skills = props.data.map((skillName) => <Button variant="outline" size="compact-xs" color="black">{skillName}</Button>)
    return (
        <Flex direction={"column"} gap={18}>
            <Text c="black" fw={"bold"}>{props.header}</Text>
            <Flex wrap={"wrap"} gap={2}>
                {skills}
            </Flex>
        </Flex>
    )
}
