import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CityProps {
  name: string;
  src: string;
  alt?: string;
  country: string;
  children: ReactNode;
}

export function City({
  name,
  country,
  src,
  alt,
  children,
}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={src} h="170px" w="100%" alt={alt} />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading
            fontSize="md"
            color="gray.700"
            fontWeight="700"
          >
            {name}
          </Heading>
          <Text color="gray.700" mt="4">
            {country}
          </Text>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
}
