import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login.js";
import Signup from "../components/Authentication/Signup.js";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  
  return (
    <Container maxW="xl">
      <Box
        d="flex"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 50px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text> Chat Application </Text>
      </Box>
      <Box
        borderRadius="lg"
        borderWidth="1px"
        bg="white"
        color="black"
        px={5}
        width="100%"
      >
        <Tabs variant="soft-rounded" padding={3}>
          <TabList>
            <Tab width="50%">LOGIN</Tab>
            <Tab width="50%">SIGNUP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
