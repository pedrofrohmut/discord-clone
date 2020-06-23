import React from "react"

import ChannelButton from "../ChannelButton"

import { Container, Category, AddCategoryIcon } from "./styles"

const ChannelList: React.FC = () => (
  <Container className="ChannelList">
    <Category>
      <span>CANAIS DE TEXTO</span>
      <AddCategoryIcon />
    </Category>
    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="trabalho" />
    <ChannelButton channelName="lolzinho" />
    <ChannelButton channelName="csgo" />
    <ChannelButton channelName="valorant" />
  </Container>
)

export default ChannelList
