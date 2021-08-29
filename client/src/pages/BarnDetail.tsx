import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import BarnGeneralDetails from 'src/components/BarnsDetails/BarnGeneralDetails';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabContent: {
    width: '100%',
  },
}));

const TabPanel = ({ children, value, index }: TabPanelProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabContent}
    >
      {value === index && (
      <Box p={3}>
        {children}
      </Box>
      )}
    </div>
  );
};

type BarnTabType = { label: string, id: number };

const BARN_TABS: (BarnTabType & { Component: React.FC })[] = [
  {
    id: 0,
    label: 'Datos generales',
    Component: BarnGeneralDetails,
  },
  {
    id: 1,
    label: 'Información del galpon',
    Component: () => <span>Item Two</span>,
  },
  {
    id: 2,
    label: 'Información de las gallinas',
    Component: () => <span>Item Three</span>,
  },
  {
    id: 3,
    label: 'Eficiencia',
    Component: () => <span>Item Four</span>,
  },
];

const BarnDetail = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Barn details tabs"
        className={classes.tabs}
      >
        {BARN_TABS.map((tab) => (
          <MuiTab key={`tab__${tab.id}`} label={tab.label} id={`vertical-tab-${tab.id}`} aria-controls={`vertical-tabpanel-${tab.id}`} />
        ))}
      </Tabs>
      {BARN_TABS.map(({ id, Component: TabComponent }) => (
        <TabPanel key={`tab-component__${id}`} value={value} index={id}>
          <TabComponent />
        </TabPanel>
      ))}
    </div>
  );
};

export default BarnDetail;
