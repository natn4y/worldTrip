import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "270px"]}
      bgImage="url('/assets/banner-1/background.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20,", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            5 continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.7rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image
          display={["none", "none", "block"]}
          src="/assets/banner-1/airplane.svg"
          alt="avião amarelo voando"
          w={["300px", "300px", "450px"]}
          ml="8"
          transform="translateY(50px)"
        />
      </Flex>
    </Flex>
  );
}
