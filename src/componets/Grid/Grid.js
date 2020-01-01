import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"



export default function SpacingGrid(props) {

  return (
    <Grid container justifyContent={"center"}>
      <Grid item lg={6} sm={props.sm} xs={props.xs}>
        <Paper>hello world</Paper>
      </Grid>
      <Grid item lg={6} sm={props.sm} xs={props.xs}>
        <Paper>hello world</Paper>
      </Grid>
    </Grid>
  )
}
