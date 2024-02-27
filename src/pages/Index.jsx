import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, Button, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaUserSecret, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <HStack justifyContent="space-between">
          <IconButton
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            isRound={true}
            size="md"
            alignSelf="flex-start"
            aria-label="Toggle dark mode"
            onClick={() => {
              // Dummy function for the icon. In a real situation, it would toggle color mode.
            }}
          />
          <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
            HS_PRO
          </Heading>
        </HStack>
        <Box bg={bg} p={5} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWNrZXJ8ZW58MHx8fHwxNzA4OTk2NzA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="HS_PRO Avatar" />
            <Heading as="h2" size="md">
              Hacker Alias: HS_PRO
            </Heading>
            <Text fontSize="md" color={color}>
              HS_PRO is an enigmatic figure in the digital world, known for their unparalleled skills and the art of the hack. They craft digital solutions that bend the rules, always staying one step ahead of the game.
            </Text>
            <HStack spacing={4}>
              <IconButton
                icon={<FaGithub />}
                isRound={true}
                size="lg"
                aria-label="Github Profile"
                onClick={() => {
                  // Dummy function for the icon. In a real situation, it would link to Github profile.
                }}
              />
              <IconButton
                icon={<FaLinkedin />}
                isRound={true}
                size="lg"
                aria-label="LinkedIn Profile"
                onClick={() => {
                  // Dummy function for the icon. In a real situation, it would link to LinkedIn profile.
                }}
              />
              <IconButton
                icon={<FaTwitter />}
                isRound={true}
                size="lg"
                aria-label="Twitter Profile"
                onClick={() => {
                  // Dummy function for the icon. In a real situation, it would link to Twitter profile.
                }}
              />
              <IconButton
                icon={<FaEnvelope />}
                isRound={true}
                size="lg"
                aria-label="Send Email"
                onClick={() => {
                  // Dummy function for the icon. In a real situation, it would open an email client.
                }}
              />
            </HStack>
          </VStack>
        </Box>
        <Button leftIcon={<FaUserSecret />} colorScheme="teal" variant="solid">
          Join the Mission
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
