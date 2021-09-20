import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BarnGeneralDetails from 'src/components/BarnsDetails/BarnGeneralDetails';
import { useParams } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    minHeight: '100%',
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

interface BarnTabsType {
  label: string,
  Component: React.FC<{ id: number }>,
}

const BARN_TABS: BarnTabsType[] = [
  {
    label: 'Datos generales',
    Component: BarnGeneralDetails,
  },
  {
    label: 'Información del galpon',
    Component: () => <span>Item Two</span>,
  },
  {
    label: 'Información de las gallinas',
    Component: () => <span>Item Three</span>,
  },
  {
    label: 'Eficiencia',
    Component: () => <span>Item Four</span>,
  },
];

const BarnDetail = (): JSX.Element => {
  const classes = useStyles();
  const { barnID } = useParams<{ barnID: string }>();
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
        {BARN_TABS.map((tab, id) => (
          <Tab key={`tab__${tab.label}`} label={tab.label} id={`vertical-tab-${id}`} aria-controls={`vertical-tabpanel-${id}`} />
        ))}
      </Tabs>
      {BARN_TABS.map(({ Component: TabComponent, label }, id) => (
        <TabPanel key={`tab-component__${label}`} value={value} index={id}>
          <TabComponent id={Number(barnID)} />
        </TabPanel>
      ))}
    </div>
  );
};

export default BarnDetail;
