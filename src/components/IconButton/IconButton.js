import React from "react";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon/Icon";
import styled from "styled-components/macro";
import VisuallyHidden from "../VisuallyHidden";

const IconButton = ({ id, color, label, size, strokeWidth, ...delegated }) => {
  return (
    <UnstyledButton>
      <Icon id={id} strokeWidth={strokeWidth} size={size} color={color} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </UnstyledButton>
  );
};

export default IconButton;
