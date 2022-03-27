import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner/index";

const Home: NextPage = () => {
  return (
    <>
      <Flex>
        <Header />
      </Flex>
      <Banner />
    </>
  );
};

export default Home;
