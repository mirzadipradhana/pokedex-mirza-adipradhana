import React from "react";
import { Link as LinkRoute, LinkProps } from "react-router-dom";
import styled from "styled-components";

export default (props: LinkProps) => <Link {...props}>{props.children}</Link>;

const Link = styled(LinkRoute)`
  color: #46A6C3;

  &:hover {
    text-decoration: underline;
    color: #46A6C3;
    opacity: .75
  }
`;
