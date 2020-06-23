import React from "react"

import ServerButton from "../ServerButton"

import { Container, Separator } from "./styles"

const ServerList: React.FC = () => (
  <Container className="ServerList">
    <ServerButton isHome />

    <Separator className="Separator" />

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
