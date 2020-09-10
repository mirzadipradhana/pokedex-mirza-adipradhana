import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import styled from "styled-components";

const DropdownStyled = styled(Dropdown)`
  color: black;
  position: relative;
  margin-top: 50px;
  z-index: 1;
  font-size: 18px;

  .menu {
    width: 100%;
  }
`;

const Filter = (props) => (
  <DropdownStyled text={props.caption} icon='filter'>
    <Dropdown.Menu>
      <Dropdown.Menu scrolling>
        {props.options.map((option) => (
          <Dropdown.Item key={option.value} {...option} onClick={props.onChange} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </DropdownStyled>
)

Filter.defaultProps = {
  caption: 'Filter',
  options: []
}

Filter.propTypes = {
  caption: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  }))
}

export default Filter