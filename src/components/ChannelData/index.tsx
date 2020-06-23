import React, { useRef, useEffect } from "react"

import ChannelMessage, { Mention } from "../ChannelMessage"

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current
    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container className="ChannelData">
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Diego Fernandes"
          date="21/06/2020"
          isBot
          hasMention
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, me carrega no LOL e CS de novo
              por favor?
            </>
          }
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
