import { SubMenusTab } from "@/domain/models/components/subMenusTab";
import { useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import { Container, TabComponent, TabsComponents } from "./styles";

interface TabSubMenusProps {
  openSideBar: boolean;
  subMenusTab: SubMenusTab[];
}

export default function TabSubMenus(props: TabSubMenusProps): React.ReactNode {
  const { openSideBar, subMenusTab } = props;
  const [value, setValue] = useState(0);

  function handleChange(_event: any, newValue: number): void {
    setValue(newValue);
  }

  return (
    <>
      <Container openSideBar={openSideBar} className="container-tabs">
        <TabsComponents centered value={value} onChange={handleChange}>
          {subMenusTab.map((tab) => (
            <TabComponent
              key={tab.label}
              id={`tab-${tab.label}`}
              label={tab.label}
            />
          ))}
        </TabsComponents>
      </Container>
      {subMenusTab.map((x, i) => (
        <CustomTabPanel
          key={x.label}
          value={value}
          index={i}
          openSideBar={openSideBar}
        >
          {x.body}
        </CustomTabPanel>
      ))}
    </>
  );
}
