import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner/index";
import { Caracteristicas } from "../components/Caracteristicas";
import { Separator } from "../components/Separator";

const Home: NextPage = () => {
  return (
    <>
      <Flex>
        <Header />
      </Flex>
      <Banner />
      <Caracteristicas />
      <Separator />
    </>
  );
};

export default Home;
