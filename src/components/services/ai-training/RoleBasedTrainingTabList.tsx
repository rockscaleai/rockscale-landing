'use client';
import { Fragment } from 'react';
import Tab from '../../ui/tab/Tab';
import TabList from '../../ui/tab/TabList';

const RoleBasedTrainingTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Engineering
        </Tab>
        <Tab index={1} variant="desktop">
          Operations
        </Tab>
        <Tab index={2} variant="desktop">
          Sales
        </Tab>
        <Tab index={3} variant="desktop">
          Data
        </Tab>
        <Tab index={4} variant="desktop">
          Leadership
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Engineering
        </Tab>
        <Tab index={1} variant="mobile">
          Operations
        </Tab>
        <Tab index={2} variant="mobile">
          Sales
        </Tab>
        <Tab index={3} variant="mobile">
          Data
        </Tab>
        <Tab index={4} variant="mobile">
          Leadership
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default RoleBasedTrainingTabList;
