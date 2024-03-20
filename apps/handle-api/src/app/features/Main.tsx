import {
  Box,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';

import { FetchItems } from './FetchItems';
import { PostItems } from './PostItems';
import { FetchItemByID } from './FetchItemByID';
import { DeleteItem } from './DeleteItem';
import { FC } from 'react';

export const Main: FC = () => {
  return (
    <Box w="full" minH="100vh">
      <Tabs p={8} position="relative" variant="unstyled">
        <TabList>
          <Tab>GET</Tab>
          <Tab>POST</Tab>
          <Tab>GET BY ID</Tab>
          <Tab>DELETE</Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />

        <TabPanels>
          <TabPanel>
            <FetchItems />
          </TabPanel>
          <TabPanel>
            <PostItems />
          </TabPanel>
          <TabPanel>
            <FetchItemByID />
          </TabPanel>
          <TabPanel>
            <DeleteItem />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
