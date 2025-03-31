import { ReactNode } from "react";

import { Container } from "./styles";

interface BoxContentsProps {
  children: React.ReactNode | ReactNode;
  className?: string;
}

export default function BoxContentsBase(props: BoxContentsProps): React.ReactNode {
  const { children, className } = props;
  return <Container className={className}>{children}</Container>;
}

BoxContentsBase.defaultProps = {
  className: "",
};
