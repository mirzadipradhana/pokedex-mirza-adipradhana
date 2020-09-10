import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import styled from "styled-components";

export default (props) => <Link {...props}>{props.children}</Link>;

const Link = styled(LinkRoute)`
  color: #3761A8;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    color: #3761A8;
    opacity: .75
  }
`;
