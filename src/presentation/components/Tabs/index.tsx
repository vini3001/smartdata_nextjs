import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import CustomTabPanel from "./CustomTabPanel";
import { Container } from "./style";

type TabData = {
  name: string;
  content: React.ReactNode;
};

type DynamicTabsProps = {
  tabs: TabData[];
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DynamicTabs(props: DynamicTabsProps): React.ReactNode {
  const { tabs } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            {tabs.map((tab, index) => (
              <Tab label={tab.name} key={index} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {tabs.map((tab, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {tab.content}
          </CustomTabPanel>
        ))}
      </Box>
    </Container>
  );
}
