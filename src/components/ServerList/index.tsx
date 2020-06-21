import React from "react"

import ServerButton from "../ServerButton"

import { Container, Separator } from "./styles"

const ServerList: React.FC = () => (
  <Container>
    <ServerButton isHome />

    <Separator />

    <ServerButton mentions={3} />
    <ServerButton hasNotifications />
    <ServerButton mentions={3} />
    <ServerButton />
    <ServerButton />
    <ServerButton mentions={3} />
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications />
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications />
  </Container>
)

export default ServerList
