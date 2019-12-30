import React from "react"
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap"
import Classes from "./Card.module.scss"

const CommitteeCard = props => {
  return (
    <Card className={Classes.card}>
      <CardImg
        top
        src={props.img}
        alt="Card image cap"
        className={Classes.img}
      />
      <CardBody>
        <CardTitle className={Classes.title}>{props.title}</CardTitle>
        <CardText className={Classes.shortInfo}>{props.info}</CardText>
        {props.links
          ? props.links.map((val, i) => {
              return (
                <a href={val.address} target="_Blank">
                  <img
                    src={val.icon}
                    width="25px"
                    height="25px "
                    className={Classes.links}
                  />
                </a>
              )
            })
          : null}
      </CardBody>
    </Card>
  )
}

export default CommitteeCard
