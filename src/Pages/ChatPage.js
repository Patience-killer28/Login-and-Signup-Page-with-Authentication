import { Box } from "@chakra-ui/react";
import MyChatBox from "../components/miscellanious/MyChatBox";
import SideDrawer from "../components/miscellanious/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import MYChats from "../components/miscellanious/MYChats";
const Chatpage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MYChats />}
        {user && <MyChatBox />}
      </Box>
    </div>
  );
};

export default Chatpage;
