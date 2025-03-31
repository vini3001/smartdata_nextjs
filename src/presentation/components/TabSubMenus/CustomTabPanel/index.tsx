import { Content } from "../../DefaultPage/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  openSideBar: boolean;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, openSideBar, ...other } = props;

  return value === index ? (
    <Content
      role="tabpanel"
      hidden={value !== index}
      id={`content-panel-${index}`}
      opensidebar={openSideBar}
      {...other}
    >
      {value === index && children}
    </Content>
  ) : (
    <></>
  );
}
