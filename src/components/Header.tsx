import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h={["50px", "100px"]}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
    >
      <Grid
        w="100%"
        h="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          w={["80px, 185px"]}
          src="./assets/logo.svg"
          alt="logo"
          justifySelf="center"
          gridColumn="2"
        >
        </Image>
      </Grid>
    </Flex>
  );
}
