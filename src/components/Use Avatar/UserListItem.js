import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      display="flex"
      alignItems="center"
      border="2px"
      color="black"
      borderColor="black"
      borderRadius="20px"
      padding="3px 4px 3px 4px"
      mt="10px"
      _hover={{
        background: "#81E6D9",
      }}
    >
      <Avatar
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
        border="2px"
      />
      <Box
        px="10px"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        _hover={{
          color: "white",
        }}
      >
        <Text>{user.name}</Text>
        <Text>
          <b>Email ID:</b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
