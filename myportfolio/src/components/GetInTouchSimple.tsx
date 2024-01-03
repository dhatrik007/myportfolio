import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { StyleSheet, css } from 'aphrodite';

export default function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form className={css(style.formContainer)} onSubmit={form.onSubmit(() => {
        form.setValues({})
    })}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'europa, sans-serif' }}
        fw={"bold"}
        ta="center"
        c="black"
      >
        Get in touch
      </Title>
      <Text ff="sans-serif" size="xl" c="#494F55"> Feel free to contact me by submitting the form below and I will get back to you ASAP.</Text>


      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          size="md"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          size="md"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        size="md"
        name="subject"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        size="md"
        name="message"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md" color="black" variant="outline">
          Send message
        </Button>
      </Group>
    </form>
  );
}

const style = StyleSheet.create({
    formContainer: {
        color: "black",
    }
})