import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Content } from "../../components/Content";
import { Cities } from "../../components/Cities";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex
        direction="column"
        maxW="1160px"
        px="1rem"
        mx="auto"
        mb="10"
      >
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
