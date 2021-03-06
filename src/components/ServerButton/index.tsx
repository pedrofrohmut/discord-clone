import React from "react"

import Logo from "../../assets/logo-rocketseat.svg"

import { Button } from "./styles"

export interface Props {
  selected?: boolean
  isHome?: boolean
  hasNotifications?: boolean
  mentions?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? "ServerButton active" : "ServerButton "}
  >
    {isHome && <img src={Logo} alt="RocketSeat" />}
  </Button>
)

export default ServerButton
