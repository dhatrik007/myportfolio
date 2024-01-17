import React from "react"
import { SimpleGrid, Group, Title, Text, Flex } from '@mantine/core';
import { StyleSheet, css } from 'aphrodite';

export default function GetInTouchSimple() {
  const [name, setName] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [subject, setSubject] = React.useState("")

  return (
    <form className={css(style.formContainer)} name="contact" method="POST">
      <input type="hidden" name="form-name" value="contact"/>
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

      <Flex direction={"column"} gap={24}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <Flex direction={"column"}>
          <label>Name</label>
          <input
            className={css(style.input)}
            placeholder="Your name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
          </Flex>
          <Flex direction={"column"}>
            <label>Email</label>
            <input
              className={css(style.input)}
              placeholder="Your email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {setEmail(e.currentTarget.value)}}
            />
          </Flex>
        </SimpleGrid>
        <Flex direction={"column"}>
          <label>Subject</label>
          <input
            className={css(style.input)}
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={(e) => {setSubject(e.currentTarget.value)}}
          />
        </Flex>
        <Flex direction={"column"}>
          <label>Message</label>
          <textarea
            className={css(style.input)}
            placeholder="Your message"
            name="message"
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
          ></textarea>
        </Flex>
      </Flex>


      <Group justify="center" mt="xl">
        <button className={css(style.buttonClass)} type="submit" color="black">
          Send message
        </button>
      </Group>
    </form>
  );
}

const style = StyleSheet.create({
    formContainer: {
        color: "black",
    },
    input: {
      padding:"10px",
      border:"0px solid black",
      borderRadius:"20px 20px 20px 20px",
      boxShadow:"0px 2px 5px black"
    },
    buttonClass: {
      background: "Black",
      fontWeight: "bold",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      border: "0px solid black"
    }
})