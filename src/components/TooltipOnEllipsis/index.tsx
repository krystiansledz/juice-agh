import { Tooltip } from "@mui/material";
import { TooltipProps } from "@mui/material/Tooltip/Tooltip";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TooltipOnEllipsis: React.FC<TooltipProps> = (props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);

  useEffect(() => {
    setIsEllipsisActive(
      elementRef.current?.children[0]
        ? elementRef.current.offsetWidth <
            elementRef.current.children[0].scrollWidth
        : false
    );
  });

  return (
    <Tooltip
      disableHoverListener={!isEllipsisActive}
      placement="bottom"
      arrow={true}
      {...props}
    >
      <EllipsisDiv ref={elementRef}>{props.children}</EllipsisDiv>
    </Tooltip>
  );
};

export default TooltipOnEllipsis;

const EllipsisDiv = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
