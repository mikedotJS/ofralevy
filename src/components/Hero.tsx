import {
  Heading,
  Stack,
  Button,
  HStack,
  Flex,
  Img,
  Box,
  Text,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

function Hero() {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative" mb="8">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
          display="flex"
          justifyContent="end"
          textAlign="end"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Explorer les profondeurs des mondes littéraires
            </Heading>
            <Text fontSize={{ md: "2xl" }} mt="4" maxW="full">
              Plongez dans l'analyse complexe des structures narratives, des
              développements de personnages et des explorations thématiques à
              travers un corpus littéraire diversifié.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
              justifyContent="end"
            >
              <Button
                as="a"
                href="#recherches"
                colorScheme="brand"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Découvrir
              </Button>
              <HStack
                as="a"
                transition="background 0.2s"
                justify={{ base: "center", md: "flex-start" }}
                href="mailto:ofra_92@hotmail.fr"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{ bg: "whiteAlpha.300" }}
              >
                <span>Contactez Moi</span>
                <HiChevronRight />
              </HStack>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://cdn.midjourney.com/906086b2-8466-4800-9938-a3d3025e20c1/0_2.webp"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
