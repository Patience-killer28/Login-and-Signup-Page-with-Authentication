import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <ViewIcon onClick={onOpen} />
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <ModalHeader fontSize="30px" marginRight="8px">
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody alignContent="center">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              marginLeft="5px"
              marginBottom="30px"
            />
            <Text>{user.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
};

export default ProfileModel;
