import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner/index";
import { Caracteristicas } from "../components/Caracteristicas";

const Home: NextPage = () => {
  return (
    <>
      <Flex>
        <Header />
      </Flex>
      <Banner />
      <Caracteristicas />
    </>
  );
};

export default Home;
