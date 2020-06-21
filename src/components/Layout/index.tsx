import React from "react"

import { Grid } from "./styles"

import ServerList from "../ServerList"

const Layout: React.FC = () => (
  <Grid className="Grid">
    <ServerList />
  </Grid>
)

export default Layout
