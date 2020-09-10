import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image} from 'semantic-ui-react';

const PokeCard = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image src={props.src} size="small" />
        <Card.Header>{props.title}</Card.Header>
      </Card.Content>
      {props.children ? props.children : null}
    </Card>
  </Card.Group>
)

PokeCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export default PokeCard