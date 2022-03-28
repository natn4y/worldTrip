import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  Box,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="600"
        >
          50
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          Países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="600"
        >
          60
        </Heading>
        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          Línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        >
          50
        </Heading>
        <Box
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          <span>Cidades +100</span>
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["16px", "16px"]}
                  h={["16px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent
              bg="gray.700"
              color="yellow.400"
            >
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Paris, Europa, Chile, Canadá, China...
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
    </Flex>
  );
}
