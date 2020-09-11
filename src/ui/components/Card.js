import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Card, Image} from 'semantic-ui-react';

const PictureWrapper = styled.picture`
  display: block;
  
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 100%; // Default to square

  background: rgba(0, 0, 0, 0.025);

  .intrinsic--square {
    padding-top: 100%;
  }

  .intrinsic-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  margin-bottom: 12px;
`;

const PokeCard = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <PictureWrapper className=".intrinsic--square">
          <Image className="intrinsic-item " src={props.src} size="small" />
        </PictureWrapper>
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