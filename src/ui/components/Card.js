import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PokeCard = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image src={props.src} size="small" />
        <Card.Header>{props.title}</Card.Header>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default PokeCard