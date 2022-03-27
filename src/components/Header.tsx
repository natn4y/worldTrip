import { Flex, Grid, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

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
        mx="auto"
        h="100%"
        maxW="1160px"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="flex-start"
              />
            </a>
          </Link>
        )}

        <Image
          w={["80px, 185px"]}
          src="/assets/logo.svg"
          alt="logo"
          justifySelf="center"
          gridColumn="2"
        ></Image>
      </Grid>
    </Flex>
  );
}
