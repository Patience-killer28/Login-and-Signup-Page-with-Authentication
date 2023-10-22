import React, { useEffect, useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Box, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { getSender } from "../../config/ChatLogics";
import ChatLoading from "./ChatLoading";

const MYChats = ({ fetchAgain }) => {
  const [loggedUser, setloggedUser] = useState();
  const { user, Chats, setChats, selectedChat, setSelectedChat } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/chat`, config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Not a vaild name.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  useEffect(() => {
    setloggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
      </Box>
      <Box
        d="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {Chats ? (
          <Stack overflowY="scroll">
            {Chats.map((cd) => (
              <Box
                onClick={() => setSelectedChat(cd)}
                cursor="pointer"
                bg={selectedChat === cd ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === cd ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={cd._id}
              >
                <Text>
                  {!Chats.isGroupChat
                    ? getSender(loggedUser, Chats.users)
                    : Chats.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
        ;
      </Box>
    </Box>
  );
};
export default MYChats;
