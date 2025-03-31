import { ContentTypeEnum } from "@/domain/models/Enums";
import { Container } from "./styles";

interface DefaultContentProps {
  children: React.ReactNode;
  contentType: ContentTypeEnum;
}

export default function DefaultContent(
  props: DefaultContentProps
): React.ReactNode {
  const { children, contentType } = props;

  return <Container data-content-type={contentType}>{children}</Container>;
}
